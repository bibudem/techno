import os
import re
import subprocess

# Répertoire des images à convertir
images_dir = 'static/img/'

# Extensions ciblées
extensions = ('.jpeg', '.jpg', '.png')

# Conversion des images en WebP
def convert_images_to_webp():
    for root, _, files in os.walk(images_dir):
        for filename in files:
            if filename.lower().endswith(extensions):
                src_path = os.path.join(root, filename)
                base_name, _ = os.path.splitext(filename)
                dest_path = os.path.join(root, base_name + '.webp')

                try:
                    subprocess.run(['cwebp', '-q', '40', src_path, '-o', dest_path], check=True)
                    os.remove(src_path)
                    print(f'[✓] Converti : {src_path} → {dest_path}')
                except (subprocess.CalledProcessError, FileNotFoundError) as e:
                    print(f'[✗] Erreur de conversion : {src_path} → {e}')


# Mise à jour des fichiers
def update_references():
    content_dirs = ['docs', 'src/components']
    file_extensions = ('.md', '.mdx', '.js', '.jsx', '.ts', '.tsx', '.css', '.module.css')

    patterns = [
    # Markdown: ![alt](img.jpg)
    (re.compile(r'(!\[.*?\]\([^\)]+?)\.(jpeg|jpg|png)(\))', re.IGNORECASE), r'\1.webp\3'),
    
    # JSX: src="img.jpg"
    (re.compile(r'(src\s*=\s*["\'][^"\']+?)\.(jpeg|jpg|png)(["\'])', re.IGNORECASE), r'\1.webp\3'),
    
    # import from '...jpg'
    (re.compile(r'(from\s+["\'][^"\']+?)\.(jpeg|jpg|png)(["\'])', re.IGNORECASE), r'\1.webp\3'),
    
    # JSX: imageUrl="...jpg", background="...jpg"
    (re.compile(r'([a-zA-Z0-9_-]+\s*=\s*["\'][^"\']+?)\.(jpeg|jpg|png)(["\'])', re.IGNORECASE), r'\1.webp\3'),
    
    # CSS: url('/img/image.jpg')
    (re.compile(r'(url\(["\']?[^"\')]+?)\.(jpeg|jpg|png)(["\']?\))', re.IGNORECASE), r'\1.webp\3'),

    # 🆕 GENERIC STRING: '...jpg', "...jpg", `...jpg`
    (re.compile(r'(["\'`][^"\']+?)\.(jpeg|jpg|png)(["\'`])', re.IGNORECASE), r'\1.webp\3'),
]

    for content_dir in content_dirs:
        for root, _, files in os.walk(content_dir):
            for filename in files:
                if filename.endswith(file_extensions):
                    filepath = os.path.join(root, filename)
                    try:
                        with open(filepath, 'r', encoding='utf-8') as f:
                            content = f.read()

                        updated_content = content
                        for pattern, replacement in patterns:
                            updated_content = pattern.sub(replacement, updated_content)

                        if updated_content != content:
                            with open(filepath, 'w', encoding='utf-8') as f:
                                f.write(updated_content)
                            print(f'[✓] Liens mis à jour : {filepath}')
                    except Exception as e:
                        print(f'[✗] Erreur fichier {filepath} : {e}')


# Nettoyage des images restantes
def clean_remaining_images():
    for root, _, files in os.walk(images_dir):
        for filename in files:
            if filename.lower().endswith(extensions):
                filepath = os.path.join(root, filename)
                try:
                    os.remove(filepath)
                    print(f'[✓] Supprimé : {filepath}')
                except Exception as e:
                    print(f'[✗] Erreur suppression {filepath} : {e}')


# Exécution du script
if __name__ == '__main__':
    print('📦 Conversion des images en WebP...')
    convert_images_to_webp()

    print('\n📝 Mise à jour des références dans Markdown, React et CSS...')
    update_references()

    print('\n🧹 Suppression des images originales...')
    clean_remaining_images()

    print('\n✅ Terminé.')
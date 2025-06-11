import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Arduino 

## Qu’est-ce qu’Arduino?

Arduino est une marque de cartes électroniques matériellement libres sur lesquelles se trouve un microcontrôleur. Elles peuvent être programmées pour analyser et produire des signaux électriques afin d’effectuer des tâches diverses. Arduino est aussi le nom du logiciel utilisé pour programmer le microcontrôleur (Arduino IDE). C’est l’outil par excellence pour apprendre l’électronique et la programmation.

![Une carte Arduino](/img/docs/arduino_1.webp)

Pour démarrer, il vous faut :

- Une carte électronique Arduino
- Un câble USB
- Un ordinateur (Mac, Linux ou Windows)
- Le logiciel Arduino IDE

## Téléchargement du logiciel

Télécharger et installer [la dernière version du logiciel Arduino IDE](https://www.arduino.cc/en/software) pour Windows, Mac ou Linux.

:::warning
    Si vous utilisez un Arduino générique (sans la mention de la marque sur la carte), [télécharger et installer le driver CH340](http://www.wch-ic.com/downloads/CH341SER_ZIP.html)
:::


## Connecter le microcontrôleur à l’ordinateur

Utiliser le câble USB. Une petite lumière verte apparaîtra sur la carte lors du branchement pour indiquer que l’Arduino est en état de marche. Ce câble sert non seulement à alimenter la carte, mais aussi à lui envoyer des instructions. Les lumières de **RX** et **TX** peuvent clignoter brièvement lors du branchement, c’est tout à fait normal.

## Test du microcontrôleur

**1.** Ouvrir le logiciel **Arduino IDE**, aller dans **Outils → Type de carte → Arduino AVR Boards** et sélectionner **Arduino Uno**.

![Interface du logiciel Arduino IDE](/img/docs/arduino_2.webp)

**2.** Sélectionner le bon port pour pouvoir communiquer avec la carte. Généralement, l’identifiant de la carte est affiché.

Si vous utilisez un Arduino générique (sans la mention de la marque sur la carte), l’identifiant de la carte ne s’affichera pas. Pour deviner quel port COM utiliser, débrancher la carte et vérifier la liste des ports. Ensuite, brancher la carte. Vous allez voir apparaître un nouveau port COM.

![Interface du logiciel Arduino IDE](/img/docs/arduino_3.webp)

**3.** Le logiciel est aussi une mine d’or d’exemples en tout genre. Pour tester votre carte et s’assurer que la communication entre cette dernière et l’ordinateur est fonctionnelle, allez vers **Fichier → Exemples → 01.Basics → Blink**. Ce programme va tout simplement faire clignoter une petite lumière sur la carte.

![Interface du logiciel Arduino IDE](/img/docs/arduino_4.webp)

**4.** Pour envoyer le code de **Blink** vers le microcontrôleur, cliquez sur **Téléverser**. Une fois l’opération complétée, le logiciel vous confirmera que le téléversement est terminé. La lumière de la **PIN 13** (L) clignotera une fois par seconde. Si une erreur survient, assurez-vous que la carte est bien branchée, que vous avez bien choisi le bon type d’Arduino et le bon port de communication.

![Interface du logiciel Arduino IDE](/img/docs/arduino_5.webp)

![La carte Arduino avec la lumière qui clignote](/img/docs/arduino_6.webp)

## Anatomie d’une carte Arduino

![Anatomie d’une carte Arduino](/img/docs/arduino_7.webp)

1. **Bouton RESET** : Sert à réinitialiser l’Arduino. N’efface pas le contenu qui est déjà programmé.
2. **Port USB** : Sert à alimenter la carte de prototypage, à téléverser un sketch (programme) et communiquer via `Serial.println()`.
3. **Port d’alimentation** : S’il n’est pas connecté au port USB, sert uniquement à alimenter la carte. Accepte du voltage entre 7V et 12V.
4. **Alimentation et GND** : Utiliser ces broches pour avoir une alimentation 3.3V, 5V et la masse.
5. **Analog In** : Entrée analogique, permet de connecter des capteurs analogiques et lire la broche avec `analogRead()`.
6. **Microcontrôleur ATMEGA** : Le cœur de la carte de prototypage.
7. **L, RX et TX** : RX et TX sont des lumières qui indiquent la communication entre la carte de prototypage et l’ordinateur. Elles s’allument lors du téléversement du sketch ou la communication en série. La DEL L, aussi connue par PIN 13, est une lumière intégrée dans le circuit et très utile pour déboguer des sketchs rapidement.
8. **Voyant DEL de tension** : Lorsqu’allumé, indique que la carte de prototypage est alimentée.
9. **Pin Digital** : Utilisez ces broches pour lire et écrire avec les fonctions `digitalRead()`, `digitalWrite()` et `analogWrite()`.

## Projets

<Link to="https://studiobib.notion.site/20e3598e9e2881a1887eff3b4228fa3d?v=20e3598e9e2881f9906e000c62612636&source=copy_link" className="button button--primary">
  Consulter le répertoire des projets électroniques
</Link>

## Ressources externes

- [Site officiel d'Arduino](https://www.arduino.cc/) : Documentation, aide de la communauté, produits... l'essentiel d'Arduino
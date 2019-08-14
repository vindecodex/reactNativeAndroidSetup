## Creation
Installing dependencies (Node, Watchman, JDK) - [for more updated information for installtion](https://facebook.github.io/react-native/docs/getting-started) dont follow the EXPO CLI 

```bash
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

## React Native CLI
```bash
npm install -g react-native-cli
```

## Creating our Project using the React Native CLI
```bash
react-native init projectName
```

## Android Studio
```
Just follow instruction on the link above on how to setup Android Studio and its Emulator
```

## Running our Application from emulator
- Run the emulator on android studio
- ```bash npm start```
- open a new tab dont close the `npm start` and ```bash react-native run-android``` or you can edit the package.json to use this command ```bash npm run android```
- if you got an error about JDK you can install it by ```bash brew cask install java``` this will solved the problem

## To run this repo
- open android studio and open its emulator
- run ```bash npm start```
- open a new tab of terminal and ```bash npm run android```

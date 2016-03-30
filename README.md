# designless.net
[Naoki Kanazawa Official Website](http://designless.net)

## Description
[gulp_starter](https://github.com/KaitoWatanabe/gulp_starter)を利用しています。

## Requirement
* node v4.1.0 ~

## SetUp
### homebrewでnodebrewのインストール

```
brew install nodebrew
```

### nodebrewのパスを通す

`.bashrc`または`.zshrc`など

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```
$ source .bashrc
```

### node.jsのインストール

最新の安定版をインストールします。

```
$ nodebrew install-binary stable
```

### node.jsのバージョンを指定

インストールした最新版を指定します。

```
$ nodebrew use stable
use v4.1.0
```
### node.jsのバージョンを確認

node.jsがつかえるようになっているか確認します。

```
$ node -v
v4.1.0
```

=======
### gulp-cli のインストール

```
npm install -g gulp-cli
```

## Install

```
$ npm install
```

## Usage

```
$ gulp
```

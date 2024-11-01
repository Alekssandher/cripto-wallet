# Cripto Wallet
<div align="center">
    <img src="https://github.com/user-attachments/assets/8e6176a6-fe51-4b04-94b9-dfbae6aed13e" alt="Cripto Wallet"></div></br>
</div>

**Cripto Wallet** is a Bitcoin wallet generator that allows you to create secure addresses with private keys and seed phrases.
> *You can run it via web, locally, or through the executable version. Check the index for details.*

## Table of Contents

- [Web Version](#web-version)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
- [Contribution](#contribution)
- [License](#license)

## Web Version

The web version of Cripto Wallet allows you to access the wallet generator directly from your browser, with no installation required. You can use all the features available in the desktop version. To access the web version, [visit this link](https://cripto-wallet.vercel.app/).

## Prerequisites

Before running the project, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 20.18)
- [npm](https://www.npmjs.com/) (typically installed with Node.js)

## Dependencies

The following libraries are used in the project:

- **bip32** - For generating Bitcoin key hierarchies.
- **bip39** - For creating and validating mnemonic phrases.
- **bitcoinjs-lib** - A library for handling Bitcoin transactions.
- **express** - A web framework for Node.js.
- **nodemon** - A tool to automatically restart the server during development.
- **prompt-sync** - For synchronous user input reading.

## Installation
>  *If you don't want to run the app through the command line or don't want to install anything, check the executable or web version.*

1. Clone this repository:

    ```bash
    git clone https://github.com/Alekssandher/cripto-wallet.git
    ```

2. Navigate to the project directory:

    ```bash
    cd cripto-wallet
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Project

### Local Execution

To start the server locally, use the following command:
 ```bash
  npm start
  ```
Or, to start in development mode:
  ```bash
  npm run dev
  ```
## Executable Version
This project also includes an executable version located in the `excs` folder. To use it, follow these steps:
1. Navigate to the `excs` folder and run the program.
   
## Contribution
If you want to contribute to the project, feel free to open an issue or submit a pull request. All contributions are welcome!

## License
This project is licensed under the GNU General Public License (GPL) version 3. You are free to use, modify, and distribute this software, provided that all copies and derivatives are also licensed under GPL v3.

For more details, see the `LICENSE` file included in this repository.

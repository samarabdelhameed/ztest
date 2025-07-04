// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface NonceManager$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "NonceManager",
  "sourceName": "contracts/NonceManager.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint192",
          "name": "key",
          "type": "uint192"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint192",
          "name": "key",
          "type": "uint192"
        }
      ],
      "name": "incrementNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint192",
          "name": "",
          "type": "uint192"
        }
      ],
      "name": "nonceSequenceNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "NonceManager",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<NonceManager$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/NonceManager.sol:NonceManager",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<NonceManager$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "NonceManager",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<NonceManager$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/NonceManager.sol:NonceManager",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<NonceManager$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "NonceManager",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<NonceManager$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/NonceManager.sol:NonceManager",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<NonceManager$Type["abi"]>>;
}

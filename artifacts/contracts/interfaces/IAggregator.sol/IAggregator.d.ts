// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IAggregator$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IAggregator",
  "sourceName": "contracts/interfaces/IAggregator.sol",
  "abi": [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "initCode",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "accountGasLimits",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "preVerificationGas",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "gasFees",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "paymasterAndData",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "internalType": "struct PackedUserOperation[]",
          "name": "userOps",
          "type": "tuple[]"
        }
      ],
      "name": "aggregateSignatures",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "aggregatedSignature",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "initCode",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "accountGasLimits",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "preVerificationGas",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "gasFees",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "paymasterAndData",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "internalType": "struct PackedUserOperation[]",
          "name": "userOps",
          "type": "tuple[]"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "validateSignatures",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "initCode",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "accountGasLimits",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "preVerificationGas",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "gasFees",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "paymasterAndData",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "internalType": "struct PackedUserOperation",
          "name": "userOp",
          "type": "tuple"
        }
      ],
      "name": "validateUserOpSignature",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "sigForUserOp",
          "type": "bytes"
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
    contractName: "IAggregator",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IAggregator$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/interfaces/IAggregator.sol:IAggregator",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IAggregator$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IAggregator",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IAggregator$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/interfaces/IAggregator.sol:IAggregator",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IAggregator$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IAggregator",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IAggregator$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/interfaces/IAggregator.sol:IAggregator",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IAggregator$Type["abi"]>>;
}

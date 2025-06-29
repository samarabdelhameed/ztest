// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface MessageHashUtils$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "MessageHashUtils",
  "sourceName": "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
  "abi": [],
  "bytecode": "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220d16d13e105f8f65b59b77c3a4171d84c0c7f3f1e869e32773d21c750d789751e64736f6c634300081c0033",
  "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220d16d13e105f8f65b59b77c3a4171d84c0c7f3f1e869e32773d21c750d789751e64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "MessageHashUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "MessageHashUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MessageHashUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MessageHashUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "MessageHashUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
}

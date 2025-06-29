// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IERC1271$Type } from "./IERC1271";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IERC1271"]: IERC1271$Type;
    ["@openzeppelin/contracts/interfaces/IERC1271.sol:IERC1271"]: IERC1271$Type;
  }

  interface ContractTypesMap {
    ["IERC1271"]: GetContractReturnType<IERC1271$Type["abi"]>;
    ["@openzeppelin/contracts/interfaces/IERC1271.sol:IERC1271"]: GetContractReturnType<IERC1271$Type["abi"]>;
  }
}

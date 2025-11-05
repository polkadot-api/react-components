import { HexString } from "@polkadot-api/substrate-bindings";
import { blo } from "blo";
import { FC } from "react";

export const EthIdenticon: FC<{
  address: HexString;
  size?: number;
  className?: string;
}> = ({ address, size, className }) => {
  return <img className={className} src={blo(address as "0x", size)} />;
};

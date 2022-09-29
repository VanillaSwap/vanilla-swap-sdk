import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 106,
    TESTNET = 111,
    DEVNET = 1337
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const ADDRESSES: {
    1337: {
        WagyuFactory: string;
        PancakeFactory_Init_Code_Hash: string;
        owner: string;
        Multicall2: string;
        WAGToken: string;
        WVLX: string;
        TE6: string;
        TE9: string;
        TE12: string;
        TE18: string;
        WAGStake: string;
        Timelock: string;
        WAGFarm: string;
        WagyuVault: string;
        VaultOwner: string;
        WAGStakingFactory: string;
        WagyuRouter: string;
    };
    111: {
        WagyuFactory: string;
        PancakeFactory_Init_Code_Hash: string;
        owner: string;
        Multicall2: string;
        WAGToken: string;
        WVLX: string;
        TE6: string;
        TE9: string;
        TE12: string;
        TE18: string;
        WAGStake: string;
        Timelock: string;
        WAGFarm: string;
        WagyuVault: string;
        VaultOwner: string;
        WAGStakingFactory: string;
        WagyuRouter: string;
    };
    106: {
        owner: string;
        Multicall2: string;
        WAGToken: string;
        WVLX: string;
        WAGStake: string;
        Timelock: string;
        WAGFarm: string;
        WagyuVault: string;
        VaultOwner: string;
        WAGStakingFactory: string;
        WagyuFactory: string;
        PancakeFactory_Init_Code_Hash: string;
        WagyuRouter: string;
    };
};
export declare const DEFAULT_CHAIN_ID = ChainId.MAINNET;
export declare const FACTORY_ADDRESS: string;
export declare const INIT_CODE_HASH: string;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};

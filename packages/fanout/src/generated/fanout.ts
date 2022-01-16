import { IdlAccounts, Idl } from '@project-serum/anchor';
export const FanoutIDLJson: Idl & { metadata?: { address: string } } = {
  "version": "0.0.0",
  "name": "fanout",
  "instructions": [
    {
      "name": "init",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeFanoutArgs"
          }
        },
        {
          "name": "model",
          "type": {
            "defined": "MembershipModel"
          }
        }
      ]
    },
    {
      "name": "initForMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintHoldingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeFanoutForMintArgs"
          }
        }
      ]
    },
    {
      "name": "addMemberWallet",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "addMemberNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "addMemberToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "membershipKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "stakeTokenMember",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unstakeTokenMember",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "distributeForNft",
      "accounts": [
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "holdingAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMembership",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "DistributeMemberArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Fanout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "account",
            "type": "publicKey"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "totalMembers",
            "type": "u32"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "accountOwnerBumpSeed",
            "type": "u8"
          },
          {
            "name": "totalAvailableShares",
            "type": "u64"
          },
          {
            "name": "membershipModel",
            "type": {
              "defined": "MembershipModel"
            }
          },
          {
            "name": "membershipMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalStakedShares",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "FanoutMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "FanoutMembershipVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "amountAtStake",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "shares",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "membershipKey",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "FanoutMembershipMintVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanoutMint",
            "type": "publicKey"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "amountAtStake",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeFanoutArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "nativeAccountBumpSeed",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeFanoutForMintArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "membershipModel",
            "type": {
              "defined": "MembershipModel"
            }
          }
        ]
      }
    },
    {
      "name": "AddMemberArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "voucherBumpSeed",
            "type": "u8"
          },
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DistributeMemberArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mintFanoutMembershipBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MembershipModel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Wallet"
          },
          {
            "name": "Token"
          },
          {
            "name": "NFT"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "BadArtithmetic",
      "msg": "Encountered an arithmetic error"
    },
    {
      "code": 301,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 302,
      "name": "InsufficientShares",
      "msg": "Not Enough Available Shares"
    },
    {
      "code": 303,
      "name": "SharesArentAtMax",
      "msg": "All available shares must be assigned to a member"
    },
    {
      "code": 304,
      "name": "NewMintAccountRequired",
      "msg": "A New mint account must be provided"
    },
    {
      "code": 305,
      "name": "MintAccountRequired",
      "msg": "A Token type Fanout requires a Membership Mint"
    },
    {
      "code": 306,
      "name": "InvalidMembershipModel",
      "msg": "Invalid Membership Model"
    },
    {
      "code": 307,
      "name": "InvalidMembershipVoucher",
      "msg": "Invalid Membership Voucher"
    },
    {
      "code": 308,
      "name": "MintDoesNotMatch",
      "msg": "Invalid Mint for the config"
    },
    {
      "code": 309,
      "name": "InvalidHoldingAccount",
      "msg": "Holding account does not match the config"
    },
    {
      "code": 310,
      "name": "HoldingAccountMustBeAnATA",
      "msg": "A Mint holding account must be an ata for the mint owned by the config"
    },
    {
      "code": 311,
      "name": "DerivedKeyInvalid"
    },
    {
      "code": 312,
      "name": "IncorrectOwner"
    },
    {
      "code": 313,
      "name": "WalletDoesNotOwnMembershipToken",
      "msg": "Wallet Does not Own Membership Token"
    }
  ],
  "metadata": {
    "address": "Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"
  }
};
export type FanoutIDL = {"version":"0.0.0","name":"fanout","instructions":[{"name":"init","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"fanout","isMut":true,"isSigner":false},{"name":"holdingAccount","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"membershipMint","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeFanoutArgs"}},{"name":"model","type":{"defined":"MembershipModel"}}]},{"name":"initForMint","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"fanout","isMut":true,"isSigner":false},{"name":"fanoutForMint","isMut":true,"isSigner":false},{"name":"mintHoldingAccount","isMut":true,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeFanoutForMintArgs"}}]},{"name":"addMemberWallet","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"account","isMut":false,"isSigner":false},{"name":"fanout","isMut":true,"isSigner":false},{"name":"membershipAccount","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"AddMemberArgs"}}]},{"name":"addMemberNft","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"account","isMut":false,"isSigner":false},{"name":"fanout","isMut":true,"isSigner":false},{"name":"membershipAccount","isMut":true,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"tokenAccount","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"AddMemberArgs"}}]},{"name":"addMemberToken","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"membershipKey","isMut":false,"isSigner":false},{"name":"membershipMintTokenAccount","isMut":false,"isSigner":false},{"name":"fanout","isMut":true,"isSigner":false},{"name":"membershipMint","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"AddMemberArgs"}}]},{"name":"stakeTokenMember","accounts":[{"name":"signer","isMut":false,"isSigner":true},{"name":"fanout","isMut":true,"isSigner":false},{"name":"membershipAccount","isMut":true,"isSigner":false},{"name":"membershipMint","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"unstakeTokenMember","accounts":[{"name":"authority","isMut":false,"isSigner":true},{"name":"account","isMut":false,"isSigner":false},{"name":"fanout","isMut":true,"isSigner":false},{"name":"membershipAccount","isMut":true,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"tokenAccount","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"distributeForNft","accounts":[{"name":"member","isMut":false,"isSigner":false},{"name":"membershipMintTokenAccount","isMut":false,"isSigner":false},{"name":"membershipMint","isMut":false,"isSigner":false},{"name":"membershipAccount","isMut":true,"isSigner":false},{"name":"fanout","isMut":true,"isSigner":false},{"name":"holdingAccount","isMut":false,"isSigner":false},{"name":"fanoutMint","isMut":false,"isSigner":false},{"name":"fanoutMintMembership","isMut":false,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"DistributeMemberArgs"}}]}],"accounts":[{"name":"fanout","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"name","type":"string"},{"name":"account","type":"publicKey"},{"name":"totalShares","type":"u64"},{"name":"totalMembers","type":"u32"},{"name":"totalInflow","type":"u64"},{"name":"lastSnapshotAmount","type":"u64"},{"name":"bumpSeed","type":"u8"},{"name":"accountOwnerBumpSeed","type":"u8"},{"name":"totalAvailableShares","type":"u64"},{"name":"membershipModel","type":{"defined":"MembershipModel"}},{"name":"membershipMint","type":{"option":"publicKey"}},{"name":"totalStakedShares","type":{"option":"u64"}}]}},{"name":"fanoutMint","type":{"kind":"struct","fields":[{"name":"mint","type":"publicKey"},{"name":"fanout","type":"publicKey"},{"name":"tokenAccount","type":"publicKey"},{"name":"totalInflow","type":"u64"},{"name":"lastSnapshotAmount","type":"u64"},{"name":"bumpSeed","type":"u8"}]}},{"name":"fanoutMembershipVoucher","type":{"kind":"struct","fields":[{"name":"totalInflow","type":"u64"},{"name":"lastInflow","type":"u64"},{"name":"amountAtStake","type":{"option":"u64"}},{"name":"bumpSeed","type":"u8"},{"name":"shares","type":{"option":"u64"}},{"name":"membershipKey","type":{"option":"publicKey"}}]}},{"name":"fanoutMembershipMintVoucher","type":{"kind":"struct","fields":[{"name":"fanoutMint","type":"publicKey"},{"name":"lastInflow","type":"u64"},{"name":"amountAtStake","type":{"option":"u64"}},{"name":"bumpSeed","type":"u8"}]}}],"types":[{"name":"InitializeFanoutArgs","type":{"kind":"struct","fields":[{"name":"bumpSeed","type":"u8"},{"name":"nativeAccountBumpSeed","type":"u8"},{"name":"name","type":"string"},{"name":"totalShares","type":"u64"}]}},{"name":"InitializeFanoutForMintArgs","type":{"kind":"struct","fields":[{"name":"bumpSeed","type":"u8"},{"name":"name","type":"string"},{"name":"totalShares","type":"u64"},{"name":"membershipModel","type":{"defined":"MembershipModel"}}]}},{"name":"AddMemberArgs","type":{"kind":"struct","fields":[{"name":"voucherBumpSeed","type":"u8"},{"name":"shares","type":"u64"}]}},{"name":"DistributeMemberArgs","type":{"kind":"struct","fields":[{"name":"mint","type":{"option":"publicKey"}},{"name":"mintFanoutMembershipBump","type":"u8"}]}},{"name":"MembershipModel","type":{"kind":"enum","variants":[{"name":"Wallet"},{"name":"Token"},{"name":"NFT"}]}}],"errors":[{"code":300,"name":"BadArtithmetic","msg":"Encountered an arithmetic error"},{"code":301,"name":"InvalidAuthority","msg":"Invalid authority"},{"code":302,"name":"InsufficientShares","msg":"Not Enough Available Shares"},{"code":303,"name":"SharesArentAtMax","msg":"All available shares must be assigned to a member"},{"code":304,"name":"NewMintAccountRequired","msg":"A New mint account must be provided"},{"code":305,"name":"MintAccountRequired","msg":"A Token type Fanout requires a Membership Mint"},{"code":306,"name":"InvalidMembershipModel","msg":"Invalid Membership Model"},{"code":307,"name":"InvalidMembershipVoucher","msg":"Invalid Membership Voucher"},{"code":308,"name":"MintDoesNotMatch","msg":"Invalid Mint for the config"},{"code":309,"name":"InvalidHoldingAccount","msg":"Holding account does not match the config"},{"code":310,"name":"HoldingAccountMustBeAnATA","msg":"A Mint holding account must be an ata for the mint owned by the config"},{"code":311,"name":"DerivedKeyInvalid"},{"code":312,"name":"IncorrectOwner"},{"code":313,"name":"WalletDoesNotOwnMembershipToken","msg":"Wallet Does not Own Membership Token"}],"metadata":{"address":"Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"}};

export type MembershipModel = Record<string, Record<string, any>>
export const MembershipModel = {
  Wallet: { wallet: {} },
  Token: { token: {} },
  NFT: { nft: {} }
}
    

  

export type Fanout = IdlAccounts<FanoutIDL>["fanout"]

export type FanoutMint = IdlAccounts<FanoutIDL>["fanoutMint"]

export type FanoutMembershipVoucher = IdlAccounts<FanoutIDL>["fanoutMembershipVoucher"]

export type FanoutMembershipMintVoucher = IdlAccounts<FanoutIDL>["fanoutMembershipMintVoucher"]
  
          
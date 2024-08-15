This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```
# smart contract

## structs:
### product struct
- uint256 id; 
- string productType;
- string source;
- string destination;
- bool deliveryStatus;
- uint256 batchNumber;
### Batch struct
- uint256 batchNumber; 
- string source; 
- string destination; 
- string currentLocation; 
- uint256[] productIds; 
- bool isDelivered; 
- uint256 timestamp; 
- int256 latitude; 
- int256 longitude;

## mappings
- mapping(uint256 => Product) public products; 
- mapping(uint256 => Batch) public batches;

## counts
- uint256 public productCounter; 
- uint256 public batchCounter;
## events
- event ProductCreated(uint256 productId, string productType, string source, string destination);
- event BatchCreated(uint256 batchNumber, string source, string destination);
- event BatchUpdated(uint256 batchNumber, string currentLocation, int256 latitude, int256 longitude, bool isDelivered);
- event ProductDelivered(uint256 productId, bool deliveryStatus);

## Create/update functions
-  createProduct
- createBatch
- updateBatchLocation
- markProductsAsDelivered

## Query Functions
- getBatchBySource
- getBatchByDestination
- getBatchByBatchNumber
- getBatchByProductId
- getBatchByProductType
- getProductsByBatchNumber
- getProductById


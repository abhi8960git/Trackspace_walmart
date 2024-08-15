# Trackspace Documentation

**Trackspace** is a next-generation supply chain tracking solution designed to provide ultimate transparency and security using blockchain, automation, and AI. This documentation explains the problem Trackspace solves, the structure of the project, and the components involved.

## Table of Contents
- [Problem Statement](#problem-statement)
- [Project Overview](#project-overview)
- [Frontend](#frontend)
- [Backend](#backend)
- [Computer Vision Service](#computer-vision-service)
- [Smart Contract](#smart-contract)
- [System Architecture](#system-architecture)

## Problem Statement

In today’s supply chain, transparency is a significant challenge. Producers like Akshay, who supply products to large retailers such as Walmart, struggle to track their goods accurately through multiple warehouses and transportation routes. Each warehouse might split or merge batches for further transportation, making it difficult for producers, managers, and consumers to verify if the products took the designated path and reached their destination within the required timeframe to ensure freshness.

Consumers, like Jenny, who care about the quality and freshness of their food, have no way to verify the journey of their products. Meanwhile, producers have no system in place to provide undeniable proof of where their goods have been and when they arrived. This lack of transparency leads to mistrust and potential quality issues.

## Project Overview

**Trackspace** addresses these challenges by enabling end-to-end transparency and security in the supply chain. The system ensures that every product is tracked from its origin to its final destination, with each step recorded on the blockchain. Here’s how Trackspace solves the problem:

- **Individual Product IDs**: Every product is assigned a unique ID, which is linked to a batch. This allows for precise tracking of each item as it moves through the supply chain.
- **Blockchain Logging**: Every movement and transaction related to the product is recorded on the blockchain, ensuring that the data is immutable and transparent.
- **Automated Transactions**: Using Chainlink’s upkeep service, most transactions are automated, reducing the need for manual input and minimizing human error.
- **Visual Proof**: To ensure that a product reached its designated location, Trackspace uses computer vision to recognize truck number plates. The system captures a photo of the number plate, timestamps it, uploads it to IPFS, and links it to the batch. This provides visual proof of the batch's journey.
- **Location Tracking**: Location data is stored in a centralized database at timed intervals, and the latest transaction is automatically updated on the blockchain to ensure real-time tracking.

## Frontend

The frontend of Trackspace is built with **Next.js** and serves as the user interface for interacting with the system.

### Features
- **Product ID Retrieval**: Users can retrieve product IDs and batch locations directly from the blockchain.
- **Barcode Scanning**: The frontend includes a barcode scanner that allows users to scan product IDs and retrieve associated information.
- **Smart Contract Interaction**: Users can query the smart contract to initialize a product pipeline.
- **Location Tracking**: The interface retrieves and displays the location of products on a map, providing a visual representation of their journey.
- **Transaction History**: Users can view previous transactions, including IPFS links to visual proofs stored for each product.

### Setup
To set up the frontend:

setup .env with DATABASE_URL for a postgres database

```bash
npm i
npm run dev
```
## Backend
The backend is also built with Next.js and is responsible for managing the centralized database and automating smart contract transactions.
### Features
Location Storage: Stores location information of products in a centralized database at timed intervals.
Smart Contract Interaction: Automatically serves the latest transaction to the smart contract via Chainlink’s upkeep service, reducing human error.
### Structure
API Routes: Endpoints for storing and retrieving location data.
Database: Centralized database to store product and batch location data.
Chainlink Upkeep: Service to automate the submission of the latest transactions to the smart contract.

# computer vision service
The computer vision service is designed to recognize truck name plates using machine learning models and link the information to the corresponding batch.

## Features
Name Plate Recognition: Uses computer vision to recognize and extract text from truck name plates.
Batch Association: Associates recognized text with the relevant batch in the system.
## IPFS Upload: Uploads the photo with a timestamp to IPFS and links it to the batch as visual proof.
Structure
Model: Pre-trained machine learning model for name plate recognition.
Image Processing: Scripts for processing images and extracting text.
IPFS Integration: Service for uploading photos to IPFS and retrieving links.

# System Architecture
Overview
The system architecture is designed to ensure transparency, security, and automation in the supply chain.
The frontend, backend, computer vision service, and smart contract work together to track products and batches from origin to destination.
The whole process looks like this:
<img width="1262" alt="Screenshot 2024-08-16 at 1 24 33 AM" src="https://github.com/user-attachments/assets/95e8883b-6225-425b-ab6d-2d24f1bb2fa6">
<img width="557" alt="Screenshot 2024-08-16 at 1 25 01 AM" src="https://github.com/user-attachments/assets/58ad933b-7efd-4d2f-98aa-0336aa6014e3">
<img width="663" alt="Screenshot 2024-08-16 at 1 25 36 AM" src="https://github.com/user-attachments/assets/e20b5dc5-4904-48a9-8e26-019cbc1a4247">
<img width="1124" alt="Screenshot 2024-08-16 at 1 34 06 AM" src="https://github.com/user-attachments/assets/012c6f93-1578-40a7-827e-9182051dfae8">
<img width="727" alt="Screenshot 2024-08-16 at 1 34 57 AM" src="https://github.com/user-attachments/assets/e623a77b-6639-4b01-b001-66e99fb23cba">



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


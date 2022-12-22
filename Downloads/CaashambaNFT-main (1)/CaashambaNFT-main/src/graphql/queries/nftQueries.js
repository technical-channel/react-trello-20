import {gql} from "@apollo/client";

export const getSingleNft = gql`
query GetSpecificNFT($tokenId: Int, $network: String, $collectionAddress: String) {
  getSpecificNFT(tokenId: $tokenId, network: $network, collectionAddress: $collectionAddress) {
    status
    success
    response
    data {
      name
      tokenId
      url
      imageUrl
      chainId
      network
      collectionAddress
      ownerAddress
      creatorAddress
      isMarketPlace
      price
      isAuction
      isApproved
      businessPlan
      location
      category
      description
    }
  }
}`

export const getAllNfts = gql`query GetAllNFT {
  getAllNFT {
    status
    success
    response
    data {
      name
      tokenId
      url
      imageUrl
      chainId
      network
      collectionAddress
      ownerAddress
      creatorAddress
      isMarketPlace
      price
      isAuction
      isApproved
      businessPlan
      location
      category
      description
    }
  }
}`

export const filterNfts = gql`
query FiltersNFT($limit: Int, $page: Int, $network: String, $priceMax: Float, $priceMin: Float, $isAuction: Boolean, $category: String) {
  filtersNFT(limit: $limit, page: $page, network: $network, price_max: $priceMax, price_min: $priceMin, isAuction: $isAuction, category: $category) {
    status
    success
    data {
      _id
      name
      tokenId
      url
      imageUrl
      chainId
      network
      collectionAddress
      ownerAddress
      creatorAddress
      isMarketPlace
      price
      isAuction
      isApproved
      businessPlan
      location
      category
      description
    }
    response
  }
}`

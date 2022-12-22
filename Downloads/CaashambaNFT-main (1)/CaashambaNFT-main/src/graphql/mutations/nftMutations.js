import {gql} from "@apollo/client"

const createNft = gql`
mutation Mutation($name: String, $tokenId: Int, $url: String, $imageUrl: String, $chainId: Int, $network: String, $creatorAddress: String, $collectionAddress: String, $ownerAddress: String, $isMarketPlace: Boolean, $price: Float, $isAuction: Boolean, $businessPlan: String, $location: String, $category: String, $description: String) {
  createNFT(name: $name, tokenId: $tokenId, url: $url, imageUrl: $imageUrl, chainId: $chainId, network: $network, creatorAddress: $creatorAddress, collectionAddress: $collectionAddress, ownerAddress: $ownerAddress, isMarketPlace: $isMarketPlace, price: $price, isAuction: $isAuction, businessPlan: $businessPlan, location: $location, category: $category, description: $description) {
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
}
`
const nftSaleStatus = gql`mutation putOnSale($collectionAddress: String, $tokenId: Int, $isMarketPlace: Boolean) {
  putOnSale(collectionAddress: $collectionAddress, tokenId: $tokenId, isMarketPlace: $isMarketPlace) {
    collectionAddress
    creatorAddress
  }
}`

const changeNftOwner = gql`mutation changeNftOwner($tokenId: Int, $collectionAddress: String, $ownerAddress: String) {
  changeNftOwner(tokenId: $tokenId, collectionAddress: $collectionAddress, ownerAddress: $ownerAddress) {
    chainId
    collectionAddress
  }
}`
export {createNft, nftSaleStatus, changeNftOwner};

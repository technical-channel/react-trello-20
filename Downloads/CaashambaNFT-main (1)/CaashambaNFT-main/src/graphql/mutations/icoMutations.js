import {gql} from "@apollo/client";

export const createIco = gql`
mutation CreateIco($propertyName: String, $propertySymbol: String, $description: String, $icon: String, $presaleRate: Float, $maxAllocation: Float, $profitMargin: Float, $icoIndex: Int, $isApproved: Boolean, $contractAddress: String, $tokenContractAddress: String, $owner: String, $category: String, $chainId: Int, $network: String, $userId: String) {
  createIco(propertyName: $propertyName, propertySymbol: $propertySymbol, description: $description, icon: $icon, presaleRate: $presaleRate, maxAllocation: $maxAllocation, profitMargin: $profitMargin, icoIndex: $icoIndex, isApproved: $isApproved, contractAddress: $contractAddress, tokenContractAddress: $tokenContractAddress, owner: $owner, category: $category, chainId: $chainId, network: $network, userId: $userId) {
    _id
    propertyName
    propertySymbol
    description
    icon
    presaleRate
    maxAllocation
    profitMargin
    icoIndex
    isApproved
    contractAddress
    tokenContractAddress
    chainId
    owner
    category
  }
}
`
export const CREATE_ICO_SALE = gql`
mutation Mutation($tokenId: Int, $buyerAddress: String, $amount: Float) {
  createSale(tokenId: $tokenId, buyerAddress: $buyerAddress, amount: $amount) {
    _id
    tokenId
    buyerAddress
    amount
  }
}`

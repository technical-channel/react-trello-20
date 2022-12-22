import {gql} from "@apollo/client"

export const ICOs = gql`
query Query($limit: Int, $page: Int) {
  icos(limit: $limit, page: $page) {
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

export const ico = gql`
query Query($icoIndex: String, $contractAddress: String) {
  ico(icoIndex: $icoIndex, contractAddress: $contractAddress) {
    _id
    contractAddress
    description
    icoIndex
    icon
    isApproved
    maxAllocation
    presaleRate
    profitMargin
    propertyName
    propertySymbol
    chainId
    tokenContractAddress
    network
  }
}
`

export const ICO_SALE = gql`
query UserICOSale($walletAddress: String) {
  userICOSale(walletAddress: $walletAddress) {
    _id
    tokenId
    buyerAddress
    amount
    ico {
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
    }
  }
}`

export const USER_ICOS = gql`
query UserIcos($owner: String) {
  userIcos(owner: $owner) {
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
}`

export const FILTER_ICOS = gql`
query Query($limit: Int, $page: Int, $network: String, $category: String) {
  filterICOs(limit: $limit, page: $page, network: $network, category: $category) {
    contractAddress
    chainId
    category
    description
    isApproved
    icon
    icoIndex
    maxAllocation
    owner
    presaleRate
    profitMargin
    propertyName
    propertySymbol
    tokenContractAddress
    _id
  }

}`

export const ADMIN_QUERY = gql`
query GetAdminProfitMargin($id: String) {
  getAdminProfitMargin(id: $id) {
    maximumRoyalty
    minimumRoyalty
  }
}
`

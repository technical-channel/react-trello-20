import {gql} from "@apollo/client";

export const GET_USER_DETAILS = gql`
query GetSpecificUser($email: String) {
  getSpecificUser(email: $email) {
    status
    success
    response
    data {
      name
      email
      username
      isEmailVerification
      isKYCVerification
      profileImageURL
      backgroundImageURL
      idImageURL
      walletAddress
      kyc {
        isUSACitizen
      }
      isAdmin
      isKycSubmitted
    }
  }
}
`

export const GET_USER_NFTs = gql`
query GetNFTsOfOwner($limit: Int, $page: Int, $ownerAddress: String) {
  getNFTsOfOwner(limit: $limit, page: $page, ownerAddress: $ownerAddress) {
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

export const CHECK_LOGGED_IN = gql`
query CheckLoggedIn {
  checkUserLoggedIn {
    kyc {
      isUSACitizen
    }
    _id
    email
    username
    walletAddress
    name
    isKYCVerification
    isKycSubmitted
  }
}`
export const GET_ALL_CATEGORIES = gql`
query GetAllCategories {
  getAllCategories {
    _id
    name
  }
}
`

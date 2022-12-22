import {gql} from "@apollo/client";

export const createKYC = gql`mutation CreateKYC($email: String, $address: String, $gender: String, $maritalStatus: String, $dateOfBirth: String, $isUsaCitizen: Boolean, $identifyProofType: String, $documentUrl: String) {
  createKYC(email: $email, address: $address, gender: $gender, maritalStatus: $maritalStatus, dateOfBirth: $dateOfBirth, isUSACitizen: $isUsaCitizen, identifyProofType: $identifyProofType, documentURL: $documentUrl) {
    status
    success
    data {
      _id
      address
      gender
      maritalStatus
      dateOfBirth
      isUSACitizen
      identifyProofType
      documentURL
    }
    response
  }
}`

export const SendOTP = gql`mutation Mutation($name: String!, $email: String!, $password: String!, $walletAddress: String!) {
  sendOTP(name: $name, email: $email, password: $password,  walletAddress: $walletAddress) {
    success
    status
    response
    data {
      name
      email
      isEmailVerification
      isKYCVerification
      profileImageURL
      backgroundImageURL
      idImageURL
      walletAddress
      kyc {
        _id
        address
        gender
        maritalStatus
        dateOfBirth
        isUSACitizen
        identifyProofType
      }
    }
  }
}`

export const verifyOTP = gql`
mutation Mutation($name: String, $email: String, $password: String, $otp: String, $isAdmin: Boolean, $username: String, $walletAddress: String) {
  createUser(name: $name, email: $email, password: $password, otp: $otp, isAdmin: $isAdmin, username: $username, walletAddress: $walletAddress) {
    _id
    backgroundImageURL
    email
    idImageURL
    isAdmin
    isEmailVerification
    isKYCVerification
    isKycSubmitted
    kyc {
      _id
      address
      gender
      maritalStatus
      dateOfBirth
      isUSACitizen
      identifyProofType
      documentURL
      annualIncome
    }
    name
    profileImageURL
    username
    walletAddress
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($backgroundImageUrl: String, $profileImageUrl: String, $email: String) {
  updateUser(backgroundImageURL: $backgroundImageUrl, profileImageURL: $profileImageUrl, email: $email) {
    response
    status
  }
}
`

export const LOGIN = gql`
mutation Login($password: String, $email: String) {
  login(password: $password, email: $email) {
      name
      email
      isEmailVerification
      isKYCVerification
      profileImageURL
      backgroundImageURL
      idImageURL
      walletAddress
    }
  }
`

export const LOGOUT = gql`
mutation Mutation {
  logout
}`

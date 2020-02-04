import { gql } from "apollo-boost";

export const GET_USERS = gql`
  {
    users {
      id
      email
      firstname
      lastname
      eid
      division
      subdivision
      phone
      online
    }
  }
`;

export const GET_USER = gql`
  query User($id: String!) {
    user(id: $id) {
      firstname
      lastname
      division
      subdivision
      email
      eid
      code
      phone
    }
  }
`;

export const AUTH_USER = gql`
  {
    authUser {
      id
      email
      firstname
      lastname
      eid
      division
      subdivision
      phone
      online
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const VENDOR_REG = gql`
  mutation VendorReg($email: String, $password: String, $company_name: String) {
    vendorReg(email: $email, password: $password, company_name: $company_name) {
      id
      email
      password
      company_name
    }
  }
`;

export const CREATE_USER = gql`
  mutation AddUser(
    $lastname: String!
    $firstname: String!
    $eid: String!
    $code: String!
    $phone: String!
    $division: String!
    $subdivision: String!
    $email: String!
  ) {
    addUser(
      lastname: $lastname
      firstname: $firstname
      eid: $eid
      code: $code
      phone: $phone
      division: $division
      subdivision: $subdivision
      email: $email
    ) {
      lastname
      firstname
      eid
      code
      phone
      division
      subdivision
      email
    }
  }
`;

export const EDIT_USER = gql`
  mutation EditUser(
    $id: String
    $lastname: String!
    $firstname: String!
    $eid: String!
    $code: String!
    $phone: String!
    $division: String!
    $subdivision: String!
    $email: String!
  ) {
    editUser(
      id: $id
      lastname: $lastname
      firstname: $firstname
      eid: $eid
      code: $code
      phone: $phone
      division: $division
      subdivision: $subdivision
      email: $email
    ) {
      lastname
      firstname
      eid
      code
      phone
      division
      subdivision
      email
    }
  }
`;

export const EDIT_VENDOR = gql`
  input General_input {
    registration_no: String
    office_address: String
    city: String
    state: String
    country: String
    company_tel: String
    company_email: String
    company_website: String
    contact_person: String
    designation: String
    contact_tel: String
    contact_email: String
  }

  mutation EditVendor(
    $id: ID
    $company_name: String
    $general_info: General_input
    $registration_no: String
    $office_address: String
    $city: String
    $state: String
    $country: String
    $company_tel: String
    $company_email: String
    $company_website: String
    $contact_person: String
    $designation: String
    $contact_tel: String
    $contact_email: String
    $num_of_employee: String
    $year_est: String
    $tax_num: String
    $vat_reg_no: String
    $acct_name: String
    $acct_no: String
    $bank: String
    $sortCode: String
    $branch: String
    $bank_contact_phone: String
    $ref_company_name: String
    $ref_company_address: String
    $ref_contact_person: String
    $ref_contact_designation: String
    $ref_contact_email: String
    $ref_contact_phone: String
    $individual_name: String
    $individual_address: String
    $individual_email: String
    $individual_phone: String
  ) {
    editVendor(
      id: $id
      company_name: $company_name

      registration_no: $registration_no
      office_address: $office_address
      city: $city
      state: $state
      country: $country
      company_tel: $company_tel
      company_email: $company_email
      company_website: $company_website
      contact_person: $contact_person
      designation: $designation
      contact_tel: $contact_tel
      contact_email: $contact_email
      num_of_employee: $num_of_employee
      year_est: $year_est
      tax_num: $tax_num
      vat_reg_no: $vat_reg_no
      acct_name: $acct_name
      acct_no: $acct_no
      bank: $bank
      sortCode: $sortCode
      branch: $branch
      bank_contact_phone: $bank_contact_phone
      ref_company_name: $ref_company_name
      ref_company_address: $ref_company_address
      ref_contact_person: $ref_contact_person
      ref_contact_designation: $ref_contact_designation
      ref_contact_email: $ref_contact_email
      ref_contact_phone: $ref_contact_phone

      individual_name: $individual_name
      individual_address: $individual_address
      individual_email: $individual_email
      individual_phone: $individual_phone
    ) {
      id
    }
  }
`;

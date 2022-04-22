import gql from 'graphql-tag';

export const downloadLeter = `
mutation DownloadInvitationLetter($full_name: String!, $address_line_1: String!, $address_line_2: String!, $domain_name: String!) {
  downloadInvitationLetter(fullName: $full_name, addressLine1: $address_line_1, addressLine2:$address_line_2, domainName: $domain_name){
  invitationLetter
  success
}
}
`;

export const paidRegistration = `mutation PaidEventRegistration(
  $first_name: String!
  $last_name:String!
  $email:String!
  $ticketId:Int!
  $meetingId:Int!
  $phone: String!
  $orgId: Int!
) {
  paidRegistration(
  lastName: $last_name
  firstName: $first_name
  ticketId: $ticketId
  email: $email
    phone: $phone
    meetingId: $meetingId
    orgId: $orgId
  ) {
    payment {
      id
      uuid
    }
    error
  }
}`;

export const REGISTER_USER = gql`
    mutation RegisterUser(
        $email: String!
        $first_name: String!
        $last_name: String!
        $username: String!
        $password_1: String!
        $password_2: String!
        $orgId: Int!
    ) {
        registerByOrganization(
            email: $email
            firstName: $first_name
            lastName: $last_name
            username: $username
            password1: $password_1
            password2: $password_2
            orgId: $orgId
        ) {
            token
            success
            errors
        }
    }
`;

export const SIGNIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            success
            errors
        }
    }
`;

export const VERIFY_ACCOUNT = gql`
    mutation VerifyAccount($code: String!) {
        verifyAccount(code: $code) {
            ok
            error
        }
    }
`;

export const VERIFY_ACCOUNT_BY_ORGANIZATION = gql`
    mutation VerifyAccountByOrganization($code: String!, $orgId: Int!) {
        verifyAccountByOrganization(code: $code, orgId: $orgId) {
            ok
            error
        }
    }
`;
export const RESEND_CODE = gql`
    mutation ResendActivationEmail($email: String!) {
        resendActivationEmail(email: $email) {
            ok
            error
        }
    }
`;

// export const CONFIRM_OFFLINE_PAYMENT = `
//   mutation ConfirmOfflinePaymentMutation(
//     $amountPaid: Decimal,
//     $paid: Boolean,
//     $payerName: String,
//     $paymentDate: String,
//     $paymentMeetingid: Int,
//     $paymentOrgid: Int,
//     $paymentPk: Int,
//     $paymentType: String,
//     $proofOfPayment: Upload!
//     ) {
//     confirmOfflinePayment(
//       amountPaid: $amountPaid,
//       paid: $paid
//       paymentName: $paymentName
//       paymentDate: $paymentDate
//       paymentMeetingid: $paymentMeetingid
//       paymentOrgid: $paymentOrgid
//       paymentPk: $paymentPk
//       paymentType: $paymentType
//       proofOfPayment: $proofOfPayment
//       ) {
//       success
//       error
//       payment {
//         uuid
//       }
//     }
//   }
// `;

export const CONFIRM_OFFLINE_PAYMENT = `
mutation ConfirmOfflinePayment(
    $amount_paid: Int!,
    $payment_date:String,
    $payment_meeting_id: Int!,
    $payment_org_id: Int!,
    $payment_pk: Int!,
    $payer_name: String!,
    $paid: Boolean!,
    $payment_type: String!,
    $proof_of_payment: Upload!
        ){
        confirmOfflinePayment(
        amountPaid: $amount_paid,
        paid:$paid,
        paymentDate:$payment_date,
        paymentMeetingid: $payment_meeting_id,
        paymentOrgid: $payment_org_id,
        paymentPk: $payment_pk,
        paymentType: $payment_type,
        payerName: $payer_name,
        proofOfPayment: $proof_of_payment
            ){
            payment{
            firstName,
            lastName,
            paid,
            ticket{name}
            }
        }
    }`;

export const CONFIRM_ONLINE_PAYMENT = `
  mutation ConfirmOnlinePaymentMutation(
    $amountPaid: Decimal,
    $paid: Boolean,
    $paymentApproval: String,
    $paymentDate: String,
    $paymentMeetingid: Int,
    $paymentOrgid: Int,
    $paymentPk: Int,
    $paymentType: String,
    $txref: String
    ) {
    confirmOnlinePayment(
      amountPaid: $amountPaid,
      paid: $paid
      paymentApproval: $paymentApproval
      paymentDate: $paymentDate
      paymentMeetingid: $paymentMeetingid
      paymentOrgid: $paymentOrgid
      paymentPk: $paymentPk
      paymentType: $paymentType
      txref: $txref
      ) {
      success
      error
      payment {
        id
        uuid
      }
    }
  }
`;

export const CONFIRM_ONLINE_MEMBERSHIP_PAYMENT = gql`
    mutation ConfirmMembershipOnlinePayment(
        $org_pk: Int!
        $membership_type_id: Int
        $user_id: Int!
        $amount_paid: Int!
        $paid: Boolean!
        $payment_approval: Boolean!
        $payment_type: String!
        $txref: String!
        $payment_name: String
        $payment_status: String
    ) {
        confirmMembershipOnlinePayment(
            orgPk: $org_pk
            membershipTypeId: $membership_type_id
            userId: $user_id
            amountPaid: $amount_paid
            paid: $paid
            paymentApproval: $payment_approval
            paymentType: $payment_type
            txref: $txref
            paymentName: $payment_name
            paymentStatus: $payment_status
        ) {
            error
            success
        }
    }
`;

export const SEND_PASSWORD_RESET = gql`
    mutation SendPasswordResetEmail($email: String!) {
        sendPasswordResetEmail(email: $email) {
            ok
            error
        }
    }
`;

export const VERIFY_RESET_PASSWORD_TOKEN = gql`
    mutation VerifyResetPasswordToken($code: String!) {
        verifyPasswordResetToken(code: $code) {
            ok
            error
        }
    }
`;

export const PASSWORD_RESET = gql`
    mutation PasswordReset($token: String!, $newPassword1: String!, $newPassword2: String!) {
        passwordReset(token: $token, newPassword1: $newPassword1, newPassword2: $newPassword2) {
            success
            errors
        }
    }
`;

export const DOWNLOAD_CERTIFICATE = `
mutation DownloadCertificate($full_name: String!, $domain_name: String!){
    downloadCertificate(fullName: $full_name, domainName:$domain_name){
    certificate
    success
  }
}`;

export const SUBMIT_USER_PERSONAL_INFORMATION_MUTATION = gql`
    mutation SubmitUserPersonalInformation(
        $first_name: String!
        $middle_name: String
        $last_name: String!
        $dob: String!
        $phone: String
        $bio: String
        $gender: String!
        $address: String!
        $email: String!
        $postal: String
        $state: String
        $country: String
        $nationality: String
    ) {
        updateAccount(
            firstName: $first_name
            middleName: $middle_name
            lastName: $last_name
            bio: $bio
            address: $address
            postal: $postal
            dob: $dob
            phone: $phone
            gender: $gender
            email: $email
            state: $state
            country: $country
            nationality: $nationality
        ) {
            success
            errors
        }
    }
`;
export const SUBMIT_NEXT_OF_KIN_MUTATION = gql`
    mutation NextOfKinMutationPayload(
        $user: String!
        $first_name: String!
        $middle_name: String
        $last_name: String!
        $phone: String!
        $email: String!
        $relationship: String!
    ) {
        nextOfKin(
            input: {
                user: $user
                firstName: $first_name
                middleName: $middle_name
                lastName: $last_name
                phone: $phone
                email: $email
                relationship: $relationship
            }
        ) {
            id
            user
            firstName
            errors {
                field
                messages
            }
        }
    }
`;

export const SUBMIT_USER_PROFILE_PICTURE_MUTATION = gql`
    mutation SubmitUserProfilePicture($profile_picture: Upload!) {
        profilePicture(file: $profile_picture) {
            ok
        }
    }
`;

export const SUBMIT_WORK_EXPERIENCE_MUTATION = gql`
    mutation UpdateWorkExperience(
        $user: String!
        $current: Boolean
        $companyName: String!
        $designation: String!
        $description: String
        $country: String!
        $state: String
        $address: String!
        $startDate: Date!
        $endDate: Date
    ) {
        userWorkExperience(
            input: {
                user: $user
                current: $current
                companyName: $companyName
                designation: $designation
                description: $description
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            errors {
                field
                messages
            }
        }
    }
`;

export const SubmitWorkExperienceMutationWithEndDate = gql`
    mutation UpdateWorkExperienceWithEndDate(
        $user: String!
        $current: Boolean!
        $companyName: String!
        $designation: String!
        $description: String!
        $country: String!
        $state: String!
        $address: String!
        $startDate: Date!
        $endDate: Date!
    ) {
        userWorkExperience(
            input: {
                user: $user
                current: $current
                companyName: $companyName
                designation: $designation
                description: $description
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            errors {
                field
                messages
            }
        }
    }
`;

export const EditWorkExperienceMutation = gql`
    mutation UpdateWorkExperienceEdit(
        $id: Int!
        $user: String!
        $current: Boolean!
        $companyName: String!
        $designation: String!
        $country: String!
        $state: String!
        $address: String!
        $startDate: Date!
    ) {
        userWorkExperience(
            input: {
                id: $id
                user: $user
                current: $current
                companyName: $companyName
                designation: $designation
                country: $country
                state: $state
                address: $address
                startDate: $startDate
            }
        ) {
            id
            user
            errors {
                field
                messages
            }
        }
    }
`;

export const EditWorkExperienceMutationWithEndDate = gql`
    mutation UpdateWorkExperienceWithEndDateSecond(
        $id: Int!
        $user: String!
        $current: Boolean!
        $companyName: String!
        $designation: String!
        $country: String!
        $state: String!
        $address: String!
        $startDate: Date!
        $endDate: Date!
    ) {
        userWorkExperience(
            input: {
                id: $id
                user: $user
                current: $current
                companyName: $companyName
                designation: $designation
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            id
            user
            errors {
                field
                messages
            }
        }
    }
`;
// export const SubmitWorkExperienceMutations = `
//     mutation SubmitWorkExperienceMutation ($companyName: String!, $designation: String!,
//         $country: String!, $state: String!, $address: String!, $description: String!,
//         $startDate: Date!, $endDate: Date!) {
//           userWorkExperience(
//               companyName: $companyName,
//               designation: $designation,
//               startDate: $startDate,
//               endDate: $endDate
//               description: $description,
//               address: $address,
//               state: $state,
//               country: $country,
//               ){
//                 success
//               }
//         }`;

export const DeleteWorkExperienceMutation = gql`
    mutation DeleteWorkExperience($id: ID!) {
        userWorkExperienceDelete(id: $id) {
            ok
        }
    }
`;

export const DeleteAcedamicMutation = gql`
    mutation UseracademicRecordDelete($id: ID!) {
        academicRecordDelete(id: $id) {
            ok
        }
    }
`;
export const SubmitAcademicInformationMutation = gql`
    mutation UpdateUserAcademicInformation(
        $admitted: Date!
        $school: String!
        $graduated: String!
        $program: String!
        $discipline: String!
        $current: Boolean!
        $certificate: Upload!
    ) {
        userAcademicInformation(
            admitted: $admitted
            graduated: $graduated
            discipline: $discipline
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const SUBMIT_ACADEMIC_INFORMATION_MUTATION_WITHOUT_DISCIPLINE = gql`
    mutation UpdateUserAcademicInformationWithoutDis(
        $admitted: Date!
        $school: String!
        $graduated: String!
        $program: String!
        $current: Boolean
        $certificate: Upload
    ) {
        userAcademicInformation(
            admitted: $admitted
            graduated: $graduated
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const EditAcademicInformationMutation = gql`
    mutation UpdateUserAcademicInformationEdit(
        $id: ID!
        $admitted: Date!
        $school: String!
        $discipline: String!
        $graduated: String!
        $program: String!
        $current: Boolean!
        $certificate: Upload!
    ) {
        userAcademicInformation(
            id: $id
            admitted: $admitted
            graduated: $graduated
            discipline: $discipline
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const SubmitAcademicCertificateMutation = `
    mutation UploadAcademicRecordCertificate($file: Upload!){
      uploadAcademicCertificate(file: $file) {
          ok
        }
      }
    `;

export const SubmitAdditionalInfoTextMutation = `
    mutation SubmitAdditionalInfoText($membershipRequirementId: Int!, $text: String!) {
          submitOrgAdditionalInfoText(
              membershipRequirementId:$membershipRequirementId
              text: $text,
          ){
            success
          }
        }`;

export const SubmitAdditionalInfoFileMutation = `
    mutation SubmitAdditionalInfoFile($membershipRequirementId: Int!, $file: Upload!) {
         submitOrgAdditionalInfoFile(
            membershipRequirementId:$membershipRequirementId,
            file: $file
         ){
            success
         }
    }`;

export const SubmitOrgAdditionalMembershipTypeMutation = `
mutation SubmitOrgAdditionalMembershipTypeMutation($membership_type_name: String!, $org_id: ID!){
	submitOrgAdditionalInfoMembershipType(membershipTypeName: $membership_type_name, orgId: $org_id){
		success
	}
}`;

// export const JOIN_ORGANIZATION = `
//   mutation JoinOrgMutation($orgId: ID!) {
//     joinOrganization(orgId: $orgId) {
//       request {
//         organization {
//           name
//           abbrev
//         }
//         user {
//           lastName
//         }
//         approved
//       }
//     }
//   }
// `;
// export const JOIN_ORGANIZATION  = `
// mutation JoinOrgMutation($org_id: String!, $user_id: String!
//  ) {
//   joinOrganization(input: {
//     organization: $org_id,
//     user: $user_id,
//   })
// {
//   approved
//   errors{
//     field
//     messages
//   }
// }
// }`

export const JOIN_ORGANIZATION_MUTATION = gql`
    mutation JoinOrgMutation(
        $org_id: String!
        $user_id: String!
        $approved: Boolean
        $coren_number: String!
        $org_number: String!
        $nse_number: String!
        $new_or_old: String!
        $membership_cadre_id: String
        $specialty: String
        $sub_specialty: String
        $subdivision: String
    ) {
        joinOrganization(
            input: {
                organization: $org_id
                user: $user_id
                approved: $approved
                corenNumber: $coren_number
                orgNumber: $org_number
                nseNumber: $nse_number
                newOrOld: $new_or_old
                membershipCadre: $membership_cadre_id
                specialty: $specialty
                subSpecialty: $sub_specialty
                subdivision: $subdivision
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const JOIN_ORGANIZATION_UPDATE_MUTATION = gql`
    mutation JoinOrgMutationUpdate(
        $id: Int
        $org_id: String!
        $user_id: String!
        $approved: Boolean
        $coren_number: String!
        $org_number: String!
        $nse_number: String!
        $new_or_old: String!
        $referee_one_number: String
        $referee_one_name: String
        $referee_two_number: String
        $referee_two_name: String
        $referee_three_number: String
        $referee_three_name: String
    ) {
        joinOrganization(
            input: {
                id: $id
                organization: $org_id
                user: $user_id
                approved: $approved
                corenNumber: $coren_number
                orgNumber: $org_number
                nseNumber: $nse_number
                newOrOld: $new_or_old
                refereeOneNumber: $referee_one_number
                refereeOneName: $referee_one_name
                refereeTwoNumber: $referee_two_number
                refereeTwoName: $referee_two_name
                refereeThreeNumber: $referee_three_number
                refereeThreeName: $referee_three_name
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const NULLIFY_MEMBER_OUTSTANDING_DATA = gql`
    mutation NullifyMemberOutstandingData(
        $id: Int
        $user_id: String!
        $amount_owing: Float!
        $amount_owing_reason: String!
    ) {
        joinOrganization(
            input: {
                id: $id
                user: $user_id
                amountOwing: $amount_owing
                amountOwingReason: $amount_owing_reason
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const ContactOrganizationAdmins = `
  mutation ContactOrganizationAdmins($email: String!, $emailMessage: String!, $name: String!, $orgPk: Int! ) {
    contactOrganizationAdmins(
      email: $email,
      emailMessage: $emailMessage,
      name: $name,
      orgPk: $orgPk
      ) {
      error
      success
    }
  }
`;

export const ConferenceRegistration = gql`
    mutation ConferenceRegistrationMutationPayload(
        $email: String
        $firstName: String
        $phone: String
        $lastName: String
        $ticket: String
        $organization: String
        $event: String
    ) {
        conferenceRegistration(
            input: {
                email: $email
                firstName: $firstName
                lastName: $lastName
                phone: $phone
                event: $event
                ticket: $ticket
                organization: $organization
            }
        ) {
            id
            email
            firstName
            middleName
            lastName
            user
            event
            ticket
            organization
            clientMutationId
            errors {
                field
                messages
            }
        }
    }
`;

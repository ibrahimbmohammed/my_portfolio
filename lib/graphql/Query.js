import gql from 'graphql-tag';

export const orgQuery = `
query ExternalConferenceQuery($externalDomain: String!) {
    externalConferencePage(externalDomain: $externalDomain){
    conferencePageData{
      event{
        name
        photoUrl
        description
        theme
        venue
        startDate
        endDate
        startTime
        endTime
        paid
        invitationLetter
        externalDomain
        org {
          name
        slug
        about
        }
      },
      organization{
        name
        slug
        about
        twitter
        facebook
        linkedin
        amount
        join
        photoUrl
      },
      presenters{
        person{
          firstName
        }
        slug
      },
      schedules{
        title
      },
      presentations{
        title
      }
      tickets {
        id
        name
        earlyBirdFeeCurrency
        earlyBirdFee
        earlyBirdDeadline
        lateBirdFeeCurrency
        lateBirdFee
      },
      sponsors {
        id
        name
        logoUrl
      },
    }
  }
}
`;

export const pageQuery = gql`
    query ConferencePageQuery($domain_name: String!) {
        eventByDomainName(domainName: $domain_name) {
            id
            name
            description
            venue
            theme
            startDate
            endDate
            startTime
            endTime
            invitationLetter
            photoUrl
            domainName
            org {
                id
                pk
                name
                about
                twitter
                facebook
                linkedin
                abbrev
                photoUrl
                flutterwaveSubaccountId
            }
            meetingSponsor {
                edges {
                    node {
                        id
                        name
                        logoUrl
                    }
                }
            }
            eventTicket {
                edges {
                    node {
                        id
                        name
                        earlyBirdFeeCurrency
                        earlyBirdDeadline
                        lateBirdFeeCurrency
                        lateBirdFee
                        earlyBirdFee
                    }
                }
            }
            paperMeetings {
                edges {
                    node {
                        title
                        abstract
                        file
                        externalUpload
                    }
                }
            }
        }
    }
`;

export const allEventsQuery = `
    query FetchAllOrganizationEvents($external_domain: String!) {
        allOrganizationEvents(externalDomain: $external_domain){
        name
        description
        theme
        photoUrl
        org{
           photoUrl
           name
           abbrev
        }
      }
    }`;

export const allAnnouncementsQuery = `
    query FetchAllOrganizationAnnouncement($external_domain: String!) {
        allOrganizationAnnouncements(externalDomain: $external_domain){
        title
        body
        updated
        photoUrl
        org{
           photoUrl
           name
           abbrev
        }
      }
    }
`;

export const allUpcomingEventsQuery = `
    query FetchAllOrganizationUpcomingEvents($external_domain: String!) {
        allOrganizationUpcomingEvents(externalDomain: $external_domain){
        name
        description
        theme
        photoUrl
        startDate
        org{
           photoUrl
           name
           abbrev
        }
      }
    }
`;
export const getOrgSubDivisions = gql`
    query OrgSubDivisionQuery($id: Float!) {
        orgSubDivisionList(organization_Id: $id) {
            edges {
                node {
                    pk
                    chairperson
                    email
                    subdivision
                    phoneNumber
                    state
                    meetingDaysTime
                    meetingVenue
                    dateOfInauguration
                }
            }
        }
    }
`;

export const getOrganizationWebsite = gql`
    query WebsiteQuery($domain_name: String!) {
        website(domainName: $domain_name) {
            id
            primaryColor
            webLogo
            bannerLogo
            headerTitle
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            secondaryFont
            bodyFont
            org {
                id
                pk
                name
            }
        }
    }
`;

export const getUserData = `
    query {
      user {
        id
        pk
        username
        firstName
        lastName
        bio
        dob
        qrCodeFile
        phone
        confirmedEmail
        gender
        address
        postal
        photo
        socialAuthPhotoUrl
        dateJoined
        isActive
        workplaceSet {
          edges {
            node {
              name
            }
          }
        }
      }
    }`;

export const GET_MEMBERSHIP_TYPES = gql`
    query WebsiteMembershipTypes($domain_name: String!) {
        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            membershipRenewalFeeValue
            membershipRenewalFeeStr
            description
        }
    }
`;

export const GET_TICKET_TYPES = gql`
    query TicketTypeConnection($org_Id: Float!) {
        eventTicketList(org_Id: $org_Id) {
            totalCount
            edgeCount
            edges {
                node {
                    id
                    pk
                    name
                    earlyBirdFee
                    earlyBirdDeadline
                    lateBirdFee
                    earlyBirdFeeCurrency
                    lateBirdFeeCurrency
                    earlyBirdFeeValue
                    lateBirdFeeValue
                    earlyBirdFeeStr
                    lateBirdFeeStr
                    org {
                        id
                        pk
                        name
                    }
                    meeting {
                        id
                        pk
                        name
                    }
                }
            }
        }
    }
`;

export const GET_SPECIALTIES = gql`
    query SpecialtyTypeConnection($organization_Id: Float!) {
        specialties(organization_Id: $organization_Id) {
            edges {
                node {
                    id
                    pk
                    name
                    organization {
                        id
                        name
                    }
                    subspecialtySet {
                        edges {
                            node {
                                id
                                pk
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

// export const getSubSpecialties = `
//   query SubSpecialtyTypeConnection($organization_Id: Float, $specialty_Id: Float){
//     subSpecialties(organization_Id: $organization_Id, specialty_Id: $specialty_Id){
//       id
//       name
//       membershipFeeValue
//       membershipFeeStr
//       description
//     }
//   }`;

export const getMembershipPaymentData = gql`
    query MembershipPaymentQuery($domain_name: String!) {
        website(domainName: $domain_name) {
            webLogoUrl
            org {
                pk
                id
                name
                abbrev
                about
                email
                officeAddress
                phone
                flutterwaveSubaccountId
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }
        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            membershipRenewalFeeValue
            membershipRenewalFeeStr
            description
        }
        user {
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            photo
            socialAuthPhotoUrl
            dateJoined
            isActive
        }
    }
`;

export const getAllDomainData = gql`
    query AllDataQuery($domain_name: String!) {
        orgConference(domainName: $domain_name) {
            name
            theme
            venue
            description
            startDate
            endDate
            photoUrl
        }

        website(domainName: $domain_name) {
            id
            primaryColor
            webLogo
            bannerLogo
            webLogoUrl
            bannerLogoUrl
            headerTitle
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            secondaryFont
            bodyFont
            org {
                id
                pk
                name
                abbrev
                about
                email
                officeAddress
                phone
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }

        websiteBannerSliderImages(domainName: $domain_name) {
            edges {
                node {
                    id
                    bannerTitle
                    bannerSubtitle
                    bannerBgImage
                    bannerBgImageUrl
                }
            }
        }

        threeTopmostEvents(domainName: $domain_name) {
            name
            url
            theme
            description
            venue
            startDate
            startTime
            flyer
            photoUrl
        }
    }
`;

export const getLeadersData = gql`
    query LeaderData($id: ID!) {
        orgExecutive(id: $id) {
            name
            bio
            photo
            photoUrl
            startTenure
            endTenure
            facebook
            email

            position {
                rank
                job
                position
            }
        }
    }
`;

export const getAllDashboardData = gql`
    query AllDashBoardQuery($domain_name: String!) {
        allOrganizationAnnouncements(domainName: $domain_name) {
            title
            body
            updated
            photoUrl
            org {
                photoUrl
                name
                abbrev
            }
        }

        allOrganizationUpcomingEvents(domainName: $domain_name) {
            name
            description
            theme
            photoUrl
            url
            startDate
            org {
                photoUrl
                name
                abbrev
            }
        }

        allOrganizationEvents(domainName: $domain_name) {
            name
            description
            theme
            url
            photoUrl
            org {
                photoUrl
                name
                abbrev
            }
        }

        websiteMembershipTypes(domainName: $domain_name) {
            name
            membershipFeeValue
            membershipFeeStr
            description
        }

        user {
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            socialAuthPhotoUrl
            photoUrl
            dateJoined
            isActive
            photo
            records {
                edges {
                    node {
                        pk
                        school {
                            name
                        }
                        program
                        admitted
                        graduated
                        current
                        certificate
                        discipline {
                            name
                        }
                    }
                }
            }
            workexperienceSet {
                edges {
                    node {
                        id
                        pk
                        companyName
                        designation
                        description
                        current
                        state
                        country
                        address
                        startDate
                        endDate
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
            }
        }
    }
`;

export const getDashboardAllEventsData = gql`
    query DashboardAllEventsDatas($domain_name: String!) {
        allOrganizationEvents(domainName: $domain_name) {
            name
            url
            description
            theme
            photoUrl
            startDate
            org {
                photoUrl
                name
                abbrev
            }
        }

        user {
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            socialAuthPhotoUrl
            photoUrl
            dateJoined
            isActive
            photo
            records {
                edges {
                    node {
                        school {
                            name
                        }
                        program
                        admitted
                        graduated
                        discipline {
                            name
                        }
                    }
                }
            }
            workexperienceSet {
                edges {
                    node {
                        id
                        companyName
                        designation
                        startDate
                        endDate
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }
    }
`;

export const getEventsDataList = gql`
    query DashboardAllEventsDataList($domain_name: String!, $org_Id: Float) {
        eventCategoryList(org_Id: $org_Id) {
            edges {
                node {
                    id
                    name
                    pk
                    description
                    org {
                        id
                        name
                    }
                    meetingSet {
                        totalCount
                        edges {
                            node {
                                id
                                name
                                description
                                url
                                photoUrl
                                pk
                                startDate
                                theme
                                org {
                                    pk
                                    id
                                    photoUrl
                                    name
                                    abbrev
                                }
                            }
                        }
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }
    }
`;

export const getDashboardAccountData = gql`
    query DashboardAccountData($domain_name: String!) {
        user {
            __typename
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            socialAuthPhotoUrl
            photoUrl
            dateJoined
            isActive
            photo
            records {
                edges {
                    node {
                        school {
                            name
                        }
                        program
                        admitted
                        graduated
                        discipline {
                            name
                        }
                    }
                }
            }
            workexperienceSet {
                edges {
                    node {
                        id
                        companyName
                        designation
                        startDate
                        endDate
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
            }
        }
    }
`;

export const getDashboardLayoutData = gql`
    query DashboardLayoutData($domain_name: String!) {
        user {
            id
            pk
            firstName
            lastName
            photoUrl
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                pk
                abbrev
            }
        }
    }
`;

export const WEBSITE_PAYMENT_API_QUERY = gql`
    query WebsitePaymentAPIQuery($id: Float!) {
        websitePaymentApi(organization_Id: $id) {
            edges {
                node {
                    pk
                    platform
                    testPublicKey
                    livePublicKey
                }
            }
        }
    }
`;

export const getOrgDirectors = gql`
    query GetDirectorsQuery($id: Float!) {
        orgLeadershipCategoryList(org_Id: $id) {
            edges {
                node {
                    name
                    executiveSet {
                        edges {
                            node {
                                pk
                                id
                                name
                                bio
                                photoUrl
                                position {
                                    position
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_DASHBOARD_MEMBERSHIP_REGISTRATION_DATA = gql`
    query DashboardLayoutDataMembership($domain_name: String!) {
        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            description
        }
        user {
            id
            pk
            username
            firstName
            lastName
            photoUrl
            email
        }

        website(domainName: $domain_name) {
            org {
                pk
            }
            webLogoUrl
            org {
                abbrev
            }
        }
    }
`;

export const getWebsiteFaqList = gql`
    query WebsiteFaqType($id: Float!) {
        websiteFaqList(organization_Id: $id) {
            edges {
                node {
                    id
                    question
                    answer
                    created
                    updated
                }
            }
        }
    }
`;

export const GET_ORG_SUBDIVISIONS = gql`
    query OrgSubDivisionQueries($id: Float!) {
        orgSubDivisionList(organization_Id: $id) {
            edges {
                node {
                    pk
                    chairperson
                    email
                    subdivision
                    phoneNumber
                    state
                    meetingDaysTime
                    meetingVenue
                    dateOfInauguration
                }
            }
        }
    }
`;

export const OrgSubDivision = gql`
    query OrgSubDivisionsQuery {
        orgSubDivision(id: 3) {
            pk
            chairperson
            email
            subdivision
            phoneNumber
            state
            meetingDaysTime
            meetingVenue
            dateOfInauguration
        }
    }
`;

export const getWebsitePublicationsPage = gql`
    query WebsitePublications($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            webLogoUrl
        }
    }
`;

export const getUserDataForOTPPage = gql`
    query {
        user {
            id
            username
        }
    }
`;

export const getWebsiteAboutPage = gql`
    query WebsiteAboutPages($domain_name: String!) {
        websiteAboutPage(domainName: $domain_name)
        website(domainName: $domain_name) {
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const getWebsiteThemeColors = gql`
    query WebsiteAbout($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const getContactUsPage = gql`
    query ContactUsPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
                officeAddress
                email
                phone
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const GET_REGISTER_PAGE = gql`
    query RegistersPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;
export const WebsiteColors = gql`
    query WebsiteColorData($domain_name: String!) {
        website(domainName: $domain_name) {
            primaryColor
            secondaryColor
            primaryTextColor
            secondaryTextColor
            primaryBtnColor
            secondaryBtnColor
            primaryBgColor
            secondaryBgColor
            webLogoUrl
        }
    }
`;
export const getRegisterPage = gql`
    query RegisterPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const DashboardLayoutData = `
  query DashboardLayoutData($domain_name: String!){
    website(domainName: $domain_name){
      webLogoUrl
      org {
        abbrev
      }
    }

  user{
    id
    pk
    username
    firstName
    lastName
    bio
    dob
    qrCodeFile
    phone
    confirmedEmail
    gender
    address
    postal
    socialAuthPhotoUrl
    photoUrl
    dateJoined
    isActive
    photo
		records{
			edges{
				node{
					school{
						name
					}
					program
					discipline{
						name
					}
				}
			}
		}
    workexperienceSet{
      edges{
        node{
          id
          companyName
          address
        }
      }
    }
  }
}
`;

export const EventPageData = gql`
    query WebsiteEventDetail($event_slug: String!) {
        eventBySlug(eventSlug: $event_slug) {
            name
            venue
            theme
            description
            attendance
            startDate
            endDate
            endTime
            minutes
            photoUrl
            paid
            eventTicket {
                edges {
                    node {
                        id
                        name
                        earlyBirdFee
                        earlyBirdDeadline
                    }
                }
            }
            mainEvent {
                theme
            }
            eventState
            url
            onlineMeetingLink
            org {
                name
            }

            scheduleMeetings {
                edges {
                    node {
                        title
                        description
                        scheduleEndTime
                        scheduleDate
                        scheduleStartTime
                        speaker {
                            name
                            photoUrl
                            bio
                            person {
                                firstName
                                lastName
                                email
                            }
                            presentationSet {
                                edges {
                                    node {
                                        meeting {
                                            name
                                            theme
                                        }
                                    }
                                }
                            }
                        }
                        meeting {
                            name
                            venue
                            mainEvent {
                                name
                                venue
                                theme
                                flyer
                            }
                        }
                    }
                }
            }
            presenterMeetings {
                edges {
                    node {
                        name
                        photoUrl
                        bio
                    }
                }
            }

            meetingSet {
                edges {
                    node {
                        name
                        theme
                    }
                }
            }

            meetingSponsor {
                edges {
                    node {
                        name
                        logoUrl
                    }
                }
            }
        }
    }
`;

export const getReceiptData = `
query WebsiteReceiptData($domain_name: String! $paymentId: ID!  ) {
  website(domainName: $domain_name){
    webLogoUrl
    org {
      abbrev
      phone
      email
      facebook
      twitter
    }
  }
  membershipPayment(paymentId: $paymentId) {
    amountPaidStr
    amountPaidValue
    txref
    paymentDate
    paymentType
    membershipType {
      name
    }
    org{
      name
    }
    user {
      id
      firstName
      lastName
      member {
        edges {
					node {
						orgNumber
					}
				}
      }
    }
  }
}
`;

export const ORG_SUBDIVISION_DATA = gql`
    query WebsitesQuery($id: Float!) {
        orgSubDivisionList(organization_Id: $id) {
            edges {
                node {
                    pk
                    chairperson
                    email
                    subdivision
                }
            }
        }
    }
`;

export const orgExecutiveList = `
query ExecutiveTypeConnection($org_Id: Float!){
  orgExecutiveList(org_Id: $org_Id){
    edges{
      node{
        pk
        id
        name
        bio
        photo
        position {
          position
        }
      }
    }
  }
}
`;
export const getUserPayments = gql`
    query WebsitePaymentList($orgId: ID!, $userId: ID!) {
        membershipPaymentList(orgId: $orgId, userId: $userId) {
            edges {
                node {
                    id
                    pk
                    paymentDate
                    paymentType
                    txref
                    amountPaidValue
                    membershipType {
                        name
                    }
                    org {
                        name
                        myOrg {
                            edges {
                                node {
                                    amountOwing
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
export const getPublicationCategoryList = gql`
    query WebsitePublicationCategoryList($orgId: Float!, $domain_name: String!) {
        publicationCategoryList(org_Id: $orgId, domainName: $domain_name) {
            edges {
                node {
                    id
                    name
                    publicationSet {
                        edges {
                            node {
                                title
                                abstract
                                fileUrl
                                externalUpload
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const getOutstandingPayments = gql`
    query JoinRequestType($organizationId: ID!, $userId: ID!) {
        member(organizationId: $organizationId, userId: $userId) {
            id
            pk
            paymentName
            amountOwingReason
            amountOwingValue
            amountOwingStr
            membershipCadre {
                id
                name
                description
            }
        }
    }
`;

export interface ProspectState {
    code: number
    status: string
    message: string
    data: ProspectTypes[]
  }
  
  export interface ProspectTypes {
    _id: string
    userId: string
    firstName: string
    lastName: string
    email: string
    workTelephone: string
    company: string
    companyCountry: string
    companyCity: string
    companyAddress: string
    companyPostalCode: string
    companyRole: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
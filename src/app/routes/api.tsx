// const API_ENDPOINTS = {
//     // Existing User endpoints
//     IsEmailExist: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/user/isEmailExist/",
//     Register: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/user/register",
//     LoginAuth: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/user/loginAuth",
//     GetAllUsers: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/user/getAllUsers",
//     GetDataById: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/user/getDataById/",
    
//     // Package related endpoints
//     CreatePackage: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/packages/createPackage",
//     GetAllPackages: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/packages",
//     BuyPackage: process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT + "/packages/buy",
    
//     // Updated Deposit and Withdraw endpoints
//     CreateDepositRequest: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw`,
//     CreateWithdrawRequest: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw`,
//     GetAllDepositRequests: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/deposits`,
//     GetAllWithdrawRequests: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/withdrawals/`,
//     UpdateRequestStatus: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/status/`,

//     // Activity related endpoints
//     CreateActivity: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/activity/createActivity`,
//     GetActivatedPackagesByUserId: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/activity/getActivatedPackagesByUserId/`,
//     UpdateRemainWatchTimesAndBalance: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/activity/updateRWTandBalance/`,
    

//     // Update Profile endpoints
//     ChangePassword: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/user/changePassword/`,
    
//     // Previous deposit endpoints (keeping for backward compatibility if needed)
//     PostDepodrawRequest: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/depo`,
//     GetAllDepositRequest: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/getAllDepoReq`,
//     PatchDepoStatus: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/depodraw/updateStatus/`,
//     PatchUserBalance: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/user/updateDepoBalance/`,
    
//     // Ad related endpoints
//     UploadAd: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/ads/upload`,
//     GetAdsVideos: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/ads`,
//     GetAdById: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/ads/:id`,
//     DeleteAd: `${process.env.NEXT_PUBLIC_DEFAULT_ENDPOINT}/ads/:id`,
// }

// export default API_ENDPOINTS;


const API_ENDPOINTS = {
    IsEmailExist: "http://localhost:3333/user/isEmailExist/",
    Register: "http://localhost:3333/user/register",
    LoginAuth: "http://localhost:3333/user/loginAuth",
    GetAllUsers: "http://localhost:3333/user/getAllUsers",
    GetDataById: "http://localhost:3333/user/getDataById/",
    
    // Package related endpoints
    CreatePackage: "http://localhost:3333/packages/createPackage",
    GetAllPackages: "http://localhost:3333/packages",
    BuyPackage: "http://localhost:3333/packages/buy",
    
    // Updated Deposit and Withdraw endpoints
    CreateDepositRequest: "http://localhost:3333/depodraw",
    CreateWithdrawRequest: "http://localhost:3333/depodraw",
    GetAllDepositRequests: "http://localhost:3333/depodraw/deposits",
    GetAllWithdrawRequests: "http://localhost:3333/depodraw/withdrawals/",
    UpdateRequestStatus: "http://localhost:3333/depodraw/status/",
    
    // Activity related endpoints
    CreateActivity: "http://localhost:3333/activity/createActivity",
    GetActivatedPackagesByUserId: "http://localhost:3333/activity/getActivatedPackagesByUserId/",
    UpdateRemainWatchTimesAndBalance: "http://localhost:3333/activity/updateRWTandBalance/",
    
    // Update Profile endpoints
    ChangePassword: "http://localhost:3333/user/changePassword/",
    
    // Previous deposit endpoints
    PostDepodrawRequest: "http://localhost:3333/depodraw/depo",
    GetAllDepositRequest: "http://localhost:3333/depodraw/getAllDepoReq",
    PatchDepoStatus: "http://localhost:3333/depodraw/updateStatus/",
    PatchUserBalance: "http://localhost:3333/user/updateDepoBalance/",
    
    // Ad related endpoints
    UploadAd: "http://localhost:3333/ads/upload",
    GetAdsVideos: "http://localhost:3333/ads",
    GetAdById: "http://localhost:3333/ads/:id",
    DeleteAd: "http://localhost:3333/ads/:id",
};

export default API_ENDPOINTS;

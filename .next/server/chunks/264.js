exports.id=264,exports.ids=[264],exports.modules={5885:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},9473:()=>{},1311:(e,t,a)=>{Promise.resolve().then(a.bind(a,8598))},8598:(e,t,a)=>{"use strict";a.d(t,{default:()=>x});var s=a(326),l=a(5597),r=a(5047),d=a(7618),i=a(7577),o=a(4099),h=a(6418),c=a(6226),n=a(9275);let A={src:"/_next/static/media/dollarIcon.1075d403.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVIdSxIdStHdSxHdStIdCxIdCtHdCxHdCtIdCxIdCtHdCxHdCtIdCxIdCtHdSxIdCxHdCxHdCtHdCtIdCxIdCtIdCtIdSxHdCxIdCxHdStHdSxHdSxHdCxHdStHdCxIdCtHdCtIdCxHdCxHdCsmxr/UAAAAJHRSTlMAAAAAAAAAAAEBAQECAgMDAwMFJSg3P0RMV1lhYXFxc3l6e42Opey6AAAARUlEQVR42g3KxwGAMBADMBOML/TeO+y/I+gtSHKOnlAeHY+lRMlpH1p65Na9vRIhiKPmWlyBWuM6b6pgGc9bfzazEPT8AG8HAxtUBzDhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/logout.18505816.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXJMTHIMTHJMDDIMDDJMTHIMDDJMTHIMDDJMDDIMDDJMDDIMDDJMTHIMTHIMDDIMDDIMDDIMDDIMDDJMTHIMDDIMDDJMDDJMTHIMTHJMDDIMDDsGgyXAAAAG3RSTlMAAAAAAQULDhYiJycpKSlKU1RcaGhqa3d3kaRo5ZWUAAAAN0lEQVR42mNg5ODj4mRgYWTgkBQTkeRnYGXgFWVm5hFgY2LgFmYXFBKUkoAxxOFSCMWMHLxg7QBsQgL7TI8VggAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var u=a(9484);let p=()=>{let e=(0,r.useRouter)(),[t,a]=(0,i.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[s.jsx(u.Z,{isLoading:t,message:"Logging out..."}),s.jsx(d.E.button,{className:" h-full w-full border-2 border-rose-700 rounded-full dark:bg-white/10 bg-black/10",onClick:()=>{a(!0),sessionStorage.removeItem("loginId"),e.push(l.Z.LogIn)},whileHover:{scale:1.2},whileTap:{scale:.9},children:s.jsx("div",{className:"h-full w-full",children:s.jsx(c.default,{src:g,alt:"NF",className:"scale-75"})})},"sidebarButton")]})};var m=a(2391);let x=()=>{let e=(0,r.useRouter)(),[t,a]=(0,i.useState)({role:"",userName:""}),[g,u]=(0,i.useState)("Show Balance");(0,i.useEffect)(()=>{(async()=>{null!=sessionStorage.getItem("loginId")&&"-1"!=sessionStorage.getItem("loginId")?a((await o.Z.get(h.Z.GetDataById+sessionStorage.getItem("loginId"))).data):"-1"==sessionStorage.getItem("loginId")&&a(m.D)})()},[]);let x=async()=>{u((await o.Z.get(h.Z.GetDataById+sessionStorage.getItem("loginId"))).data?.balance+" BDT"),setTimeout(()=>{u("Show Balance")},5e3)};if(null!=t)return s.jsx(s.Fragment,{children:(0,s.jsxs)("nav",{className:"sticky w-full top-0 h-14 px-4 duration-300 z-50 backdrop-blur bg-gray-200/30 dark:bg-gray-950/30 border-b border-black/20 dark:border-white/20",children:[(0,s.jsxs)("div",{className:"relative w-48 h-14 ",children:[s.jsx("button",{className:"absolute outline outline-blue-500 mt-2 dark:bg-white bg-black w-10 h-10 content-center grid justify-items-center overflow-hidden rounded-full duration-300 hover:scale-110 active:scale-100",type:"button",onClick:()=>{t?.role=="user"?e.push(l.Z.UserProfile):("-1"==sessionStorage.getItem("loginId")||t?.role=="admin")&&e.push(l.Z.AdminProfile)},children:s.jsx("div",{className:"",children:s.jsx(c.default,{src:n.Z,alt:"NF",className:""})})}),(0,s.jsxs)("div",{className:" w-40 h-full absolute left-10 content-center grid justify-items-center",children:[s.jsx("p",{className:"",children:t?.userName}),t?.role=="user"&&(0,s.jsxs)(d.E.button,{type:"button",onClick:x,className:"border border-blue-700 p-1 text-sm rounded-full grid grid-cols-5",children:[s.jsx("div",{className:"h-5 w-5 bg-amber-700 col-span-1 rounded-full overflow-hidden",children:s.jsx(c.default,{src:A,alt:"NF",className:""})}),(0,s.jsxs)("p",{className:"col-span-4",children:[" ",g," "]})]})]})]}),s.jsx(d.E.div,{className:"h-14 w-14 scale-75 absolute top-0 right-0",children:s.jsx(p,{})})]})})}},9484:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var s=a(326),l=a(8129),r=a(7618);let d=({isLoading:e,message:t})=>s.jsx(l.M,{children:e&&s.jsx(r.E.div,{className:"fixed top-0 left-0 h-[calc(100%)] w-[calc(100%)] z-50 backdrop-brightness-75 content-center grid justify-items-center",initial:{opacity:0,backdropFilter:"blur(0)"},animate:{opacity:1,backdropFilter:"blur(50px)"},exit:{opacity:0,backdropFilter:"blur(0)"},children:(0,s.jsxs)(r.E.div,{className:"p-4 w-fit min-w-[200px] h-fit bg-white/10 rounded-lg outline outline-2 outline-white/20",initial:{opacity:0,scale:1.2},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.2},transition:{duration:.3},children:[s.jsx(r.E.svg,{height:"100px",width:"100px",className:" rounded-full animate-svgSpin relative mb-1 left-[calc(50%-50px)]",initial:{opacity:0,y:-500},animate:{opacity:1,y:0},exit:{opacity:0,y:500},transition:{duration:.5},children:s.jsx("circle",{cx:"50px",cy:"50px",r:"30",fill:"none",strokeLinecap:"round",stroke:"blue",strokeWidth:"5",style:{strokeDasharray:180},className:"origin-center animate-dash"})}),s.jsx(r.E.p,{className:"text-lg text-gray-400/90 text-center w-full font-medium ",children:t})]})})})},2391:(e,t,a)=>{"use strict";a.d(t,{D:()=>s});let s={userName:"Super Admin",role:"sadmin"}},6418:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s={IsEmailExist:"http://localhost:3333/user/isEmailExist/",Register:"http://localhost:3333/user/register",LoginAuth:"http://localhost:3333/user/loginAuth",GetAllUsers:"http://localhost:3333/user/getAllUsers",GetDataById:"http://localhost:3333/user/getDataById/",CreatePackage:"http://localhost:3333/packages/createPackage",GetAllPackages:"http://localhost:3333/packages",BuyPackage:"http://localhost:3333/packages/buy",CreateDepositRequest:"http://localhost:3333/depodraw",CreateWithdrawRequest:"http://localhost:3333/depodraw",GetAllDepositRequests:"http://localhost:3333/depodraw/deposits",GetAllWithdrawRequests:"http://localhost:3333/depodraw/withdrawals/",UpdateRequestStatus:"http://localhost:3333/depodraw/status/",CreateActivity:"http://localhost:3333/activity/createActivity",GetActivatedPackagesByUserId:"http://localhost:3333/activity/getActivatedPackagesByUserId/",UpdateRemainWatchTimesAndBalance:"http://localhost:3333/activity/updateRWTandBalance/",ChangePassword:"http://localhost:3333/user/changePassword/",PostDepodrawRequest:"http://localhost:3333/depodraw/depo",GetAllDepositRequest:"http://localhost:3333/depodraw/getAllDepoReq",PatchDepoStatus:"http://localhost:3333/depodraw/updateStatus/",PatchUserBalance:"http://localhost:3333/user/updateDepoBalance/",UploadAd:"http://localhost:3333/ads/upload",GetAdsVideos:"http://localhost:3333/ads",GetAdById:"http://localhost:3333/ads/:id",DeleteAd:"http://localhost:3333/ads/:id"}},5597:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s={Home:"/pages/home",LogIn:"/pages/auth/login",Registration:"/pages/auth/registration",UserDashboard:"/pages/dashboard/user",UserProfile:"/pages/dashboard/user/profile",Depost:"/pages/dashboard/user/deposit",Packages:"/pages/dashboard/user/packages",AdminDashboard:"/pages/dashboard/admin",AdminProfile:"/pages/dashboard/admin/profile",BuyPackage:"/pages/dashboard/user/packages",Withdraw:"/pages/dashboard/user/withdraw"}},2029:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h,metadata:()=>o});var s=a(9510),l=a(9355),r=a.n(l),d=a(1711),i=a.n(d);a(5023);let o={title:"Loading..."};function h({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${r().variable} ${i().variable} ${r().className} antialiased dark:bg-gray-950 bg-gray-200`,children:s.jsx("main",{children:e})})})}},6960:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(9510);let l=(0,a(8570).createProxy)(String.raw`D:\node test\frontend-nextjs\src\app\components\dashboardNav.tsx#default`),r=({children:e})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(l,{}),e]})},9275:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s={src:"/_next/static/media/dummyProfile.f832aef8.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVZheFZheBYheFYheBZhOFZhOBYhOFYhOBZhOBZheFYhOBZhOFYhOBZheFYhOFZhOBYhOBYheBZhOBYheFZhOBYhOFZheFYheFYheFZheFYheFZheFZhOFYheFZhOBYhOCn3VEaAAAAHXRSTlMAAAAAAAAAAAECAwoKMjM8PF9fZ3h4i4ugsbLAwJ2oyrcAAABDSURBVHjaDcGHAYAgDATA5zUEsIsFG+y/pdzBVFLBWLuspCDo/OVJAnzbvU8vHmzGbR8I6JFLyaeC8UrpjoSDqArdD10LAuz/PTABAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(6621);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};
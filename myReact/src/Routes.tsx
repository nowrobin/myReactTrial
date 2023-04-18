import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("@/pages/main"));
const Campage = lazy(() => import("@/pages/cam"));
const Calendar = lazy(() => import("@/pages/calendarpage"));
// export const routes = () => {
//   return (
//     <Suspense fallback={<div>....laoding</div>}>
//       <Routes>
//         <Route path="/main" element={<MainPage />}></Route>
//         <Route path="*" element={<div>Error</div>}></Route>
//       </Routes>
//     </Suspense>
//   );
// };
//ㅇㄴㅁㅇㅁㄴㅇㅁ
export const routes = [
  {
    path: "/",
    //elements:
    children: [
      { path: "/main", element: <MainPage /> },
      { path: "/cam", element: <Campage /> },
      { path: "/calandar", element: <Calendar /> },
    ],
  },
];

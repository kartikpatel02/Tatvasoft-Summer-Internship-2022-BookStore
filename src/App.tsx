// import React from "react";
// import { ThemeProvider } from "@material-ui/core/styles";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "./assets/css/style.css";
// import { theme } from "./utils/theme";
// import MainNavigation from "./component/MainNavigation";
// import Header from "./component/header";
// import Footer from "./component/footer";
// import { AuthWrapper } from "./context/auth";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <React.Suspense fallback={<></>}>
    
//         {/* <BrowserRouter> */}
//         <AuthWrapper>
//           <div className="wrapper">
//           <Header />
//             <main>
//               <MainNavigation />
//             </main>
//             <Footer />
//           </div>
//           </AuthWrapper>
//           <ToastContainer />
//           {/* </BrowserRouter> */}
          
//       </React.Suspense>
//     </ThemeProvider>
//   );
// }

// export default App;
// import React from "react";
// import { ThemeProvider } from "@material-ui/core/styles";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "./App.css";
// import { theme } from "./utils/theme";
// import MainNavigation from "./component/MainNavigation";
// import Header from "./component/header";
// import Footer from "./component/footer";
// import { AuthWrapper } from "./context/auth";
// // import { CartWrapper } from "./context/cart";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <React.Suspense fallback={<></>}>
//         <BrowserRouter>
//         <AuthWrapper>
          
//           <div className="wrapper">
//           <Header />
//             <main>
//               <MainNavigation />
//             </main>
//             <Footer />
//           </div>
//           <ToastContainer />
          
//           </AuthWrapper>
//         </BrowserRouter>
//       </React.Suspense>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import Header from "./component/header/index";
import Footer from "./component/footer/index";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from "./component/MainNavigation";
import { AuthWrapper } from "./context/auth";
import { CartWrapper } from "./context/cart";

 const App: React.FC = () => {

	return (
		<ThemeProvider theme={theme}>
			<React.Suspense fallback={<></>}>
				<BrowserRouter>
				<AuthWrapper>
					<CartWrapper>
					
							<div className="wrapper">
								<Header />
								<main>
									<MainNavigation />
								</main>
								<Footer />
							</div>
							
							</CartWrapper>
							</AuthWrapper>
					<ToastContainer />
				</BrowserRouter>
			</React.Suspense>
		</ThemeProvider>
	);
};

export default App;

// import React from "react";

// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@material-ui/core/styles";
// import { ToastContainer } from "react-toastify";

// import "./assets/css/style.css";
// import { theme } from "./utils/theme";
// import MainNavigation from "./component/MainNavigation";

// import Header from "./component/header";
// import Footer from "./component/footer";

// import { AuthWrapper } from "./context/auth";
// import { CartWrapper } from "./context/cart";

// function App() {
// 	return (
// 		<ThemeProvider theme={theme}>
// 			<React.Suspense fallback={<></>}>
// 				<BrowserRouter>
				
// 					<AuthWrapper>
// 					<CartWrapper>
// 							<div className="wrapper">
// 								<Header />
// 								<main>
// 									<MainNavigation />
// 								</main>
// 								<Footer />
// 							</div>
// 					</CartWrapper>	
// 					</AuthWrapper>
					
// 					<ToastContainer />
// 				</BrowserRouter>
// 			</React.Suspense>
// 		</ThemeProvider>
// 	);
// }

// export default App;
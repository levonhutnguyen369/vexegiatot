import { BrowserRouter, Route, Routes } from "react-router";
import { Fragment } from "react";
import type { ComponentType, JSX, ReactNode } from "react";
import { ConfigProvider } from 'antd';

import { publicRoutes } from "./config/routes.tsx";
//ComponentType và ReactNode CHỈ là type, không tồn tại ở runtime, nên phải import bằng type

import { Toaster } from "sonner";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";

// export default App
interface RouteConfig {
  path: string;
  component: ComponentType;
  layout?: ComponentType<{ children: ReactNode }> | null;
}

function App(): JSX.Element {
  return (
    <>
    <ConfigProvider
      theme={{
    token: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  }}
    >
      <Toaster richColors /><BrowserRouter>
        <div className="App">
          <Routes>
            {(publicRoutes as RouteConfig[]).map((route, index) => {
              const Page = route.component;
              let Layout: ComponentType<{ children: ReactNode }> | typeof Fragment =
                MainLayout;

              if (route.layout === null) {
                Layout = Fragment;
              } else if (route.layout) {
                Layout = route.layout;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigProvider>
      
    </>

  );
}

export default App;


"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";

//My own files
import PageHeader from "../PageHeader";
import PageTitle from "../PageTitle";
import PageTitleButtons from "../PageTitleButtons";
import Cards from "../Cards";
import SecondPageTitle from "../SecondPageTitle";
import PageFooter from "../PageFooter";
//Currently don't use theme selections
import ThemeSelection from "../ThemeSelection";
import SecondPageBody from "../SecondPageBody";
import SecondPageQNA from "../SecondPageQNA";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Page header */}
        <PageHeader />
        {/* Separator */}
        <Separator className="my-5" />
        {/* Page title */}
        <PageTitle />
        {/* Page title buttons such as Download, Getting Started...*/}
        <PageTitleButtons />
        {/* Title for the upcoming cards*/}
        <div className="flex justify-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400	 pt-24">
          What you need to create applications that will thrive.
        </div>
        {/* Cards showcasing the benefits of using the project.*/}
        <Cards />
        {/* Add a separator, but shift it down a little to make space*/}
        <div className="pt-24">
          {/* Add the second page (with images)*/}
          <SecondPageTitle />
          <SecondPageBody />
          <SecondPageQNA />
        </div>
        <div className="pt-24">
          <Separator />
        </div>
        <PageFooter />
      </ThemeProvider>
    </>
  );
}

import React from "react";
import Router from "Routes";
import PopupsWrapper from "Containers/popups-wrapper";

export default function Layout() {
    // Layout of the application
    // Could render router, popups etc.
    return (
        <div>
            <Router />
            <PopupsWrapper />
        </div>
    );
}

package com.psim.project.bunchoftools.authorization;

import android.content.Context;

public class InAppAuthorization {

    public static boolean isUserLoggedIn(Context context){
        String token = SaveSharedPreference.getToken(context);
        boolean isEmployee = SaveSharedPreference.getIsEmployee(context);
        return ((token !=null && !token.isEmpty()) && !isEmployee);
    }

    public static boolean isEmployeeLoggedIn(Context context){
        String token = SaveSharedPreference.getToken(context);
        boolean isEmployee = SaveSharedPreference.getIsEmployee(context);
        return ((token !=null && !token.isEmpty()) && isEmployee);
    }
}

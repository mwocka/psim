package com.psim.project.bunchoftools.api_client.functionalities;

import android.content.Context;
import com.psim.project.bunchoftools.authorization.SaveSharedPreference;


public class Login {

    public static void saveToken(String token, boolean isEmployee, Context context){
        SaveSharedPreference.setToken(context,token);
        SaveSharedPreference.setIsEmployee(context,isEmployee);
    }
    public static void logout(Context context){
        SaveSharedPreference.setToken(context,"");
        SaveSharedPreference.setIsEmployee(context,false);
    }

}

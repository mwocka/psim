package com.psim.project.bunchoftools.api_client;


public interface IApiResultParser<T> {
    T parseResult(String result);
}

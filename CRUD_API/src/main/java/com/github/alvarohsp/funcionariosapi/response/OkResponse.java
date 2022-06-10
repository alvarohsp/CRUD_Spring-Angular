package com.github.alvarohsp.funcionariosapi.response;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class OkResponse<T> extends Response {

    private T data;

    public OkResponse() {
        super("OK");
        this.data = null;
    }

    public OkResponse(String message) {
        super(message);
        this.data = null;
    }

    public OkResponse(T data) {
        super("OK");
        this.data = data;
    }

    public OkResponse(String message, T data) {
        super(message);
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}

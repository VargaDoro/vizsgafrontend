import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="m-auto" style={{ maxWidth: "400px" }}>
            <h1 className="text-center">Regisztáció</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="text" className="form-label">
                        Név:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="text"
                        name="text"
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="email"
                        name="email"
                    />
                </div>
                <div>
                    <span className="text-danger">hiba</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="jelszó"
                        name="pwd"
                    />
                    <div>
                        <span className="text-danger">hiba</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó újra:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="jelszó"
                        name="pwd"
                    />
                    <div>
                        <span className="text-danger">hiba</span>
                    </div>
                </div>

                <div className=" text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Regisztrálok
                    </button>
                </div>
            </form>
        </div>
    );
}
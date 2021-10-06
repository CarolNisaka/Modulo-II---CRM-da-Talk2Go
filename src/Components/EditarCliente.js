import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CriarCliente from "./CriarCliente";
import TabelaClientes from "./TabelaClientes";


function EditarCliente (props) {
    return (
        <div>
            <TabelaClientes />
        </div>
    );
}

export default EditarCliente
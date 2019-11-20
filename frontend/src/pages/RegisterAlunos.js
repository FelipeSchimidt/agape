import React, {useEffect, useState} from "react";

import api from "../services/api";

export default function Register() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function loadAlunos() {
            const response = await api.get("/alunos");

            setAlunos(response.data);
        }

        loadAlunos();
    });

    return (
        <div>
            <h4>Lista de Alunos</h4>
            <br />
            {alunos.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                            <th>CPF</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.nascimento}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.observacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="empty">
                    <p>Registro de alunos vazio</p>
                </div>
            )}
        </div>
    );
}

package com.github.alvarohsp.funcionariosapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.alvarohsp.funcionariosapi.model.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

}

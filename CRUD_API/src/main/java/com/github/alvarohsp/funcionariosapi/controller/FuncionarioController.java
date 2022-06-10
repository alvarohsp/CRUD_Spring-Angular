package com.github.alvarohsp.funcionariosapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.alvarohsp.funcionariosapi.model.Funcionario;
import com.github.alvarohsp.funcionariosapi.repository.FuncionarioRepository;
import com.github.alvarohsp.funcionariosapi.response.OkResponse;
import com.github.alvarohsp.funcionariosapi.response.Response;

@RestController
@RequestMapping("/api/v1/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @GetMapping("/all")
    public ResponseEntity<OkResponse<List<Funcionario>>> getAllFuncionarios() {
        List<Funcionario> funci = new ArrayList<Funcionario>();
        funci.addAll(funcionarioRepository.findAll());
        return new ResponseEntity<OkResponse<List<Funcionario>>>(new OkResponse<List<Funcionario>>("OK BOY", funci),
                HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OkResponse<Funcionario>> getFuncionarioById(@PathVariable long id) {
        Optional<Funcionario> funci = funcionarioRepository.findById(id);
        return new ResponseEntity<OkResponse<Funcionario>>(new OkResponse<Funcionario>(funci.get()), HttpStatus.OK);
    }

    @PostMapping(path = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Response> addFuncionario(@RequestBody Funcionario funcionario) {

        if (funcionario.getNome().length() <= 3 &&
                funcionario.getSobrenome().length() <= 3 &&
                funcionario.getEmail().length() <= 3) {
            return new ResponseEntity<Response>(new Response("Preencha os campos com ao menos 4 caracteres"),
                    HttpStatus.BAD_REQUEST);
        }

        Funcionario novoFunci = funcionarioRepository.save(funcionario);

        if (novoFunci == null) {
            return new ResponseEntity<Response>(new Response("Erro ao adicionar funcionário"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<Response>(new Response("Funcionário adicionado com sucesso"), HttpStatus.CREATED);
    }

    @PutMapping(path = "/updt/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Response> updateFuncionario(@RequestBody Funcionario funcionario, @PathVariable Long id) {
        Optional<Funcionario> novoFunci = funcionarioRepository.findById(id);

        if (novoFunci.isPresent()) {

            if (funcionario.getNome().length() <= 3 &&
                    funcionario.getSobrenome().length() <= 3 &&
                    funcionario.getEmail().length() <= 3) {
                return new ResponseEntity<Response>(new Response("Preencha os campos com ao menos 4 caracteres"),
                        HttpStatus.BAD_REQUEST);
            }

            Funcionario funci = novoFunci.get();
            funci.setNome(funcionario.getNome());
            funci.setSobrenome(funcionario.getSobrenome());
            funci.setEmail(funcionario.getEmail());

            funcionarioRepository.save(funci);
            return new ResponseEntity<Response>(new Response("Funcionário atualizado com sucesso"), HttpStatus.OK);
        } else {
            return new ResponseEntity<Response>(new Response("Erro ao atualizar funcionário"), HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping(path = "/del/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Response> deleteFuncionario(@PathVariable Long id) {
        Optional<Funcionario> novoFunci = funcionarioRepository.findById(id);

        if (novoFunci.isPresent()) {
            funcionarioRepository.deleteById(id);

            return new ResponseEntity<Response>(new Response("Funcionário excluído com sucesso"), HttpStatus.OK);
        } else {
            return new ResponseEntity<Response>(new Response("Funcionário não encontrado"), HttpStatus.BAD_REQUEST);
        }

    }

}

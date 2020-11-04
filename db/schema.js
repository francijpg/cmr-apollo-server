const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }
  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  type Query {
    #Usuarios
    obtenerCurso: String
  }

  type Mutation {
    # Usuarios
    nuevoUsuario(input: UsuarioInput): Usuario
  }
`;

module.exports = typeDefs;

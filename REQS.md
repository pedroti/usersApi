# Recuperação de senha

**RF**
- O usuário poderá recuperar sua senha informando o seu e-mail
- O usuário deve receber um email com instruções de recuperação
- O usuário deve poder resetar sua senha

**RNF**
- Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento
- Utilizar o Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano

**RN**
- Link enviado por email para resetar deve expirar em duas horas
- O usuário precisa confirmar a nova senha ao resetar sua senha

# Atualização do perfil

**RF**
- O usuário poderá atualizar seu nome, email e senha

**RN**
- O usuário não poderá alterar seu email para um email já utilizado
- Para atualizar sua senha, usuário deve informar a senha atual
- Usuário precisa confirmar a nova senha

# Painel de prestador

**RF**
- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando socket.io;

**RN**
- A notificação deve ter um status de lida ou não para que o prestador possa controlar

# Agendamento de serviços

**RF**
- O usuário deve poder listar todos prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis de um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento

**RNF**
- A listagem de prestadores deve ser armazenada em cache

**RN**
- Cada agendamento deve durar 1h
- Os agendamentos devem estar disponíveis entre as 8 e as 18
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário passado
- O usuário não pode agendar serviços com ele mesmo

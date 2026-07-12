devpulse-backend
│
├── src
│   ├── main
│   │
│   ├── java
│   │   └── com
│   │       └── devpulse
│   │           │
│   │           ├── DevPulseApplication.java
│   │           │
│   │           ├── config
│   │           │      SecurityConfig.java
│   │           │      JwtAuthenticationFilter.java
│   │           │      CorsConfig.java
│   │           │
│   │           ├── controller
│   │           │      AuthController.java
│   │           │      UserController.java
│   │           │      GithubController.java
│   │           │
│   │           ├── dto
│   │           │      LoginRequest.java
│   │           │      RegisterRequest.java
│   │           │      UserResponse.java
│   │           │      GithubRepoResponse.java
|   |           |      UserRequest.java
│   │           │
│   │           ├── entity
│   │           │      User.java
│   │           │
│   │           ├── repository
│   │           │      UserRepository.java
│   │           │
│   │           ├── service
│   │           │      AuthService.java
│   │           │      UserService.java
│   │           │      GithubService.java
│   │           │
│   │           ├── service
│   │           │      impl
│   │           │          AuthServiceImpl.java
│   │           │          UserServiceImpl.java
│   │           │          GithubServiceImpl.java
│   │           │
│   │           ├── security
│   │           │      JwtService.java
│   │           │      UserDetailsServiceImpl.java
│   │           │
│   │           ├── exception
│   │           │      GlobalExceptionHandler.java
│   │           │      UserNotFoundException.java
│   │           │
│   │           ├── util
│   │           │      Constants.java
│   │           │
│   │           └── enums
│   │                  Role.java
│   │
│   └── resources
│          application.yml
│
└── pom.xml

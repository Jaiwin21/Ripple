package controller;

import config.JwtProvider;
import exception.UserException;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.UserRepository;
import response.AuthResponse;
import service.CustomUserDetailsServiceImplementation;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomUserDetailsServiceImplementation customUserDetails;

    public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException {

        String email=user.getEmail();
        String password=user.getPassword();
        String fullName=user.getFullName();
        String birthDate=user.getBirthDate();

        User isEmailExist=userRepository.findByEmail(email);

        return null;
    }

}

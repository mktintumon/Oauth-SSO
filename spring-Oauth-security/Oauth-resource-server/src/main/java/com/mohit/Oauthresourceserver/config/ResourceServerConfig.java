package com.mohit.Oauthresourceserver.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class ResourceServerConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(requests -> requests
                        .mvcMatchers("/api/**")
                        .access("hasAuthority('SCOPE_api.read')"))
                .oauth2ResourceServer(server -> server
                        .jwt());
        return http.build();
    }
}

package org.example.reservation;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ActiveProfiles("dev")
@AutoConfigureMockMvc
class ReservationApplicationTests {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void secureEndpointTest() throws Exception {
        this.mockMvc.perform(get("/api/secure"))
                .andExpect(status().isOk());
    }


    @Test
    void usecurelaxTest() throws Exception {
        this.mockMvc.perform(get("/api/secure-any"))
                .andExpect(status().isOk());
    }

    @Test
    void unsecureEndpointTest() throws Exception {
        this.mockMvc.perform(get("/api/unsecure"))
                .andExpect(status().isOk());
    }
}

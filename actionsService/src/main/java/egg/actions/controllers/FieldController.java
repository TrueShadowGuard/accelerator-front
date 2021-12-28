package egg.actions.controllers;

import egg.actions.facades.FieldsManagerFacade;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class FieldController {

    @Resource
    FieldsManagerFacade fieldsManagerFacade;

    @GetMapping("/free-field/{userId}")
    public boolean giveFreeField(@PathVariable Long userId) {
        fieldsManagerFacade.giveFreeField(userId);
        return true;
    }
}
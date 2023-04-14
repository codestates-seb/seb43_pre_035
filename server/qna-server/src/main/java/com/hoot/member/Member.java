package com.hoot.member;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long memberId;

    public String email;

    public String password;

    public String name;

    public String avatarLink;

    public String displayName;

    public LocalDateTime createdDate = LocalDateTime.now();

    public LocalDateTime updateDate;

}

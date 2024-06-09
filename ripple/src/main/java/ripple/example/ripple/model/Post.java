package ripple.example.ripple.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    private String content;
    private String image;
    private String video;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Like>likes= new ArrayList<>();

    @OneToMany
    private List<Post>replyPosts=new ArrayList<>();

    @ManyToOne
    private List<User>repostUser= new ArrayList<>();

    @OneToMany
    private Post replyFor;

    private boolean isReply;
    private boolean isPost;

}

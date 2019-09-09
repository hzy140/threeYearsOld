package cn.bdqn.stumanage;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("cn.bdqn.stumanage.mapper")//必须加上-用来扫描mapper接口
public class MgrExamServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(MgrExamServiceApplication.class, args);
	}
}

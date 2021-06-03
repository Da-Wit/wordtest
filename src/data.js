export const DESCRIPTIONS = [
  "개발자입장, 명세서에 맞게 코딩되었는지 검증 ",
  "사용자 입장, 요구에 맞게 구현되었는지 확인 ",
  "테스트 케이스",
  "테스트 반복시 결함이 나오지 않음 ",
  "테스팅은 정황에 의존, 서로다르게 수행해야 ",
  "결함집중, 20%코드에서 결함 80%가 존재 ",
  "테스트 테스트 후반부, 명세기반, 실행코드 테스트 ",
  "테스트 테스트 초기, 구조기반, 조건에 따른 결과테스트 ",
  "V모델 왼쪽4층, 사용자의 요구사항 ",
  "V모델 왼쪽3층, 사용자요구를 하나하나 명세한 것",
  "V모델 왼쪽2층, 명세서대로 순서정하고 디자인 ",
  "V모델 왼쪽1층, 소트프웨어 아키텍트의 최종과정",
  "V모델 오른쪽1층, WBox BBox, I/O, 경계값분석 ",
  "V모델 오른쪽2층, 단위테스트 결과를 통합, 빅뱅-점진적 통합(상향, 하향, 혼 합) ",
  "(스터브) 하향식 통합테스트에서 시험용 종속모듈 ",
  "(클러스터) 상향식 통합테스트에서 하위 종속모듈을 결합한 그룹 ",
  "V모델 오른쪽3층, 사용자 환경 장애 최소화, OS환경, 리스트분석 등 ",
  "V모델 오른쪽4층, 테스트 매니저의 최종단계, 알파, 베타테스트 ",
  "테스트 프로세스(절차)의 첫단계 ",
  "테스트 프로세스(절차)의 계획이후 둘째 단계 ",
  "테스트 프로세스(절차)의 분석이후 셋째 단계로 테스트케이스 및 시나리오 작성 ",
  "테스트 프로세스(절차)의 시나리오이후 넷째 단계",
  "테스트 프로세스(절차)의 실행 이후 마지막 단계 ",
  "참.거짓 판별위해 참값을 입력하는 기법 및 활동",
  "시간, 정보가 부족하니 나머지는 추정하는 오라클",
  "인간의 실수 등 의도치 않은 오류 ",
  "결함, 결점, 이는 오류(error)와 다르다 ",
  "담당자 품질관리(QA) 담당자가 결함을 검토, 테스터 ",
  "결함의 심각도로 결정적 / 높음 ",
  "결함의 심각도로 보통 / 낮음",
  "코드 인스펙션(=검사), 결함 제거를 위해 개발가이드 준수여부 확인",
  "검토회의, 코드품질을 평가-개선을 위한 검토기법",
  "형상관리, 개발과정에서 변경사항을 관리하는 활동 ",
  "고침! 결함 수정작업을 완료한 상태 ",
  "할당됨! 결함을 수정하기 위하여 넘겨놓은 상태 ",
  "(Structured Query Language)관계형 데이터베이스에서 조작, 쿼리하는 언어",
  "Data Definition Language (데이터 정의 언어) ",
  "Data Manipulation Language (데이터 조작 언어)",
  "Data Control Language (데이터 제어 언어) ",
  "스키마, 테이블, 도메인, 인덱스를 생성(Create)하는 명령",
  "데이터 베이스 테이블(표)를 생성하는 명령",
  "데이터 베이스 테이블(표) 속성 및 정의를 변경할 때 ",
  "데이터 베이스 테이블(표)를 삭제하는 명령 ",
  "데이터 베이스 테이블(표)이름을 변경 할 때 ",
  "테이블 내 모든 데이터를 빠르게 삭제할 때 ",
  "문자형 자료를 선언하는 명령 ",
  "날짜형 자료를 선언하는 명령, 생략금지 ",
  "특정 테이블에 데이터를 신규로 삽입할 때 ",
  "테이블 내 데이터를 새로 갱신 할 때",
  "테이블 내 데이터를 삭제할 때 ",
  "테이블 내 데이터를 획득해 올 때 ",
  "사용자에게 특정 작업의 수행 권한을 부여 ",
  "사용자에게 부여권 수행 권한을 박탈할 때 ",
  "트랜잭션 모드로 설정 할 때 ",
  "트랜잭션의 시작을 의미 ",
  "트랜잭션을 실행 할 때 ",
  "트랜잭션을 취소 할 때 ",
  "롤백 지점을 설정 할 때 ",
  "스키마를 정의하는 명령 ",
  "허가, 승인이라는 말로, 스키마의 정의에서 뒤에 나오는 사용자아이디 에 권한을 부여한다는 말 ",
  "하나의 속성이 취할 수 있는 동일한 유형의 원자값들의 집합을 정의하 는 문장",
  `'강제' 또는 '제약조건'이란 뜻으로 조건명 앞에 쓰는 명령`,
  "뒤에 조건범위를 명시하는 방식으로 씀 ",
  "디폴트, 자료형의 선언시에 기본값을 지정하는 명령 ",
  "테이블선언시 기본키를 지정하는 명령 ",
  "테이블선언시 외래키를 지정하는 명령 ",
  "테이블선언시 대체키를 지정하는 명령 ",
  "값이 없다는 뜻의 자료형 ",
  "가변길이(자료가 들어오면 길이가 결정됨) 문자 자료형으로 n은 최대 사이즈 이다 ",
  "ALTER TABLE과 함께 쓰이며 특정 속성을 삭제할 때 사용",
  "행/ 열 이란 말로 테이블에서 가로와 세로를 의미",
  "ALTER TABLE과 함께 쓰이며 속성을 추가할 때 사용",
  "가상의 테이블과 같이 뷰 이름을 정의하는 명령 ",
  "뷰를 참조하는 다른 뷰나 제약조건 까지 모두 삭제되는 옵션 ",
  "ascending order의 약자로 오름차순 정렬을 뜻함 descending order의 약자로 내림차순 정렬을 뜻함 ",
  "인덱스(색인)을 생성하는 명령어 ON 뒤에 테이블의 속성을 나열하면 됨 ",
  "인덱스를 생성할때 인덱스 키에 따라 데이터가 정렬되어 저장되므로 검색이 유리하게 됨(클러스터드 데이터) ",
  "조건 SELECT 명령에서 데이터를 그룹화하는 명령 ",
  "명령에서 데이터를 오름차순/내림차순 정렬하는 명령 ",
  "SELECT 명령에서 중복데이터를 첫번째만 표시하는 옵션",
  "SELECT의 GROUP에서 사용하는 평균을 구하는 함수",
  "두개이상의 SELECT 명령의 결과를 합집합하는 연결명령 ",
  "두개이상의 SELECT 명령의 결과를 교집합하는 연결명령 ",
  "두개이상의 SELECT 명령의 결과에서 앞선 SELECT된 테이블에 ON뒤에 있는 조건집합을 추가하는 연결명령",
];

export const ANSWERS = [
  "Validation",
  "Verification",
  "Test Case",
  "살충제 패러독스(Paradox)",
  "정황(Context)",
  "파래토(Pareto)법칙",
  "BlackBox 테스트",
  "WhiteBox 테스트",
  "Requirements",
  "Specification",
  "Design",
  "Coding",
  "Unit Testing",
  "Integration Testing",
  "Stub",
  "Cluster",
  "System Testing",
  "Acceptance Testing",
  "Test Planning",
  "Test Design",
  "Test Case",
  "Test Execution",
  "Test Report",
  "Oracle",
  "Heuristic Oracle",
  "Human Error",
  "defect, deformity",
  "QA 담당자",
  "Critical / High",
  "Medium / Low",
  "Code Inspection",
  "WorkThrough",
  "SCM",
  "Fixed",
  "Assigned",
  "SQL",
  "DDL",
  "DML",
  "DCL",
  "CREATE",
  "CREATE TABLE",
  "ALTER TABLE",
  "DROP TABLE",
  "RENAME TO",
  "TRUNCATE TABLE",
  "VARCHAR(",
  "DATE NOT NULL",
  "INSERT INTO, VALUES",
  "UPDATE, SET, WHERE",
  "DELETE FROM, WHERE",
  "SELECT FROM, WHERE",
  "GRANT",
  "REVOKE",
  "SET TRANSACTION",
  "BEGIN",
  "COMMIT",
  "ROLLBACK",
  "SAVEPOINT",
  "CREATE SCHEMA",
  "Authorization",
  "CREATE DOMAIN~AS",
  "CONSTRAINT",
  "CHECK",
  "DEFAULT",
  "PRIMARY KEY",
  "FOREIGN KEY",
  "UNIQUE",
  "NULL",
  "VARCHAR(n)",
  "DROP COLUMN",
  "ROW/ COLUMN",
  "ALTER TABLE ~ ADD",
  "CREATE VIEW",
  "CASCADE",
  "ASC",
  "DESC",
  "CREATE INDEX~ ON",
  "CLUSTER",
  "GROUP BY ~ HAVING",
  "ORDER BY SELECT",
  "DISTINCT SELECT",
  "AVG",
  "INNER JOIN",
  "LEFT JOIN ~ ON",
];
// const a = `
// Validation (검증) 개발자입장, 명세서에 맞게 코딩되었는지 검증
// Verification (확인) 사용자 입장, 요구에 맞게 구현되었는지 확인
// Test Case 테스트 케이스
// 살충제 패러독스(Paradox) 테스트 반복시 결함이 나오지 않음
// 정황(Context) 테스팅은 정황에 의존, 서로다르게 수행해야
// 파래토(Pareto)법칙 결함집중, 20%코드에서 결함 80%가 존재
// BlackBox 테스트 테스트 후반부, 명세기반, 실행코드 테스트
// WhiteBox 테스트 테스트 초기, 구조기반, 조건에 따른 결과테스트
// Requirements(요구사항) V모델 왼쪽4층, 사용자의 요구사항
// Specification(분석) V모델 왼쪽3층, 사용자요구를 하나하나 명세한 것 Design(디자인) V모델 왼쪽2층, 명세서대로 순서정하고 디자인
// Code, Coding(구현) V모델 왼쪽1층, 소트프웨어 아키텍트의 최종과정 Unit Testing(단위테스트) V모델 오른쪽1층, WBox BBox, I/O, 경계값분석
// Integration Testing(통합테스트) V모델 오른쪽2층, 단위테스트 결과를 통합, 빅뱅-점진적 통합(상향, 하향, 혼 합)
// Stub(스터브) 하향식 통합테스트에서 시험용 종속모듈
// Cluster(클러스터) 상향식 통합테스트에서 하위 종속모듈을 결합한 그룹 System Testing(시스템 테스트) V모델 오른쪽3층, 사용자 환경 장애 최소화, OS환경, 리스트분석 등 Acceptance Testing(인수테스트) V모델 오른쪽4층, 테스트 매니저의 최종단계, 알파, 베타테스트 Test Planning(테스트 계획) 테스트 프로세스(절차)의 첫단계
// Test Design(테스트분석, 디자인) 테스트 프로세스(절차)의 계획이후 둘째 단계
// Test Case(테스트 시나리오) 테스트 프로세스(절차)의 분석이후 셋째 단계로 테스트케이스 및 시나리오 작성
// Test Execution(테스트 실행) 테스트 프로세스(절차)의 시나리오이후 넷째 단계 Test Report(테스트결과평가) 테스트 프로세스(절차)의 실행 이후 마지막 단계 Oracle (테스트 오라클) 참.거짓 판별위해 참값을 입력하는 기법 및 활동
// Heuristic Oracle(휴리스틱) 시간, 정보가 부족하니 나머지는 추정하는 오라클 Human Error 인간의 실수 등 의도치 않은 오류
// defect, deformity 결함, 결점, 이는 오류(error)와 다르다
// QA 담당자 품질관리(QA) 담당자가 결함을 검토, 테스터
// Critical / High 결함의 심각도로 결정적 / 높음
// Medium / Low 결함의 심각도로 보통 / 낮음
// Code Inspection 코드 인스펙션(=검사), 결함 제거를 위해 개발가이드 준수여부 확인 WorkThrough(워크스루) 검토회의, 코드품질을 평가-개선을 위한 검토기법 SCM 형상관리, 개발과정에서 변경사항을 관리하는 활동 Fixed 고침! 결함 수정작업을 완료한 상태
// Assigned 할당됨! 결함을 수정하기 위하여 넘겨놓은 상태
// SQL (Structured Query
// Language)관계형 데이터베이스에서 조작, 쿼리하는 언어
// DDL Data Definition Language (데이터 정의 언어)
// DML Data Manipulation Language (데이터 조작 언어) DCL Data Control Language (데이터 제어 언어)
// CREATE (DDL) 스키마, 테이블, 도메인, 인덱스를 생성(Create)하는 명령 CREATE TABLE (DDL) 데이터 베이스 테이블(표)를 생성하는 명령 ALTER TABLE (DDL) 데이터 베이스 테이블(표) 속성 및 정의를 변경할 때 DROP TABLE (DDL) 데이터 베이스 테이블(표)를 삭제하는 명령 RENAME TO (DDL) 데이터 베이스 테이블(표)이름을 변경 할 때 TRUNCATE TABLE (DDL) 테이블 내 모든 데이터를 빠르게 삭제할 때 VARCHAR( (DDL) 문자형 자료를 선언하는 명령
// DATE NOT NULL (DDL) 날짜형 자료를 선언하는 명령, 생략금지
// INSERT INTO, VALUES (DML) 특정 테이블에 데이터를 신규로 삽입할 때 UPDATE, SET, WHERE (DML) 테이블 내 데이터를 새로 갱신 할 때
// DELETE FROM, WHERE (DML) 테이블 내 데이터를 삭제할 때
// SELECT, FROM, WHERE (DML) 테이블 내 데이터를 획득해 올 때
// GRANT (직역: 부여) (DCL) 사용자에게 특정 작업의 수행 권한을 부여
// REVOKE (직역: 취소) (DCL) 사용자에게 부여권 수행 권한을 박탈할 때
// SET TRANSACTION (DCL) 트랜잭션 모드로 설정 할 때
// BEGIN (DCL) 트랜잭션의 시작을 의미
// COMMIT (직역:제출하다) (DCL) 트랜잭션을 실행 할 때
// ROLLBACK (DCL) 트랜잭션을 취소 할 때
// SAVEPOINT (DCL) 롤백 지점을 설정 할 때
// CREATE SCHEMA (DDL) 스키마를 정의하는 명령
// Authorization (DDL) 허가, 승인이라는 말로, 스키마의 정의에서 뒤에 나오는 사용자아이디 에 권한을 부여한다는 말
// CREATE DOMAIN~AS (DDL) 하나의 속성이 취할 수 있는 동일한 유형의 원자값들의 집합을 정의하 는 문장
// CONSTRAINT (DDL) '강제' 또는 '제약조건'이란 뜻으로 조건명 앞에 쓰는 명령, CHECK 뒤에 조건범위를 명시하는 방식으로 씀
// DEFAULT (DDL) 디폴트, 자료형의 선언시에 기본값을 지정하는 명령 PRIMARY KEY (DDL) 테이블선언시 기본키를 지정하는 명령
// FOREIGN KEY (DDL) 테이블선언시 외래키를 지정하는 명령
// UNIQUE (DDL) 테이블선언시 대체키를 지정하는 명령
// NULL 값이 없다는 뜻의 자료형
// VARCHAR(n) 가변길이(자료가 들어오면 길이가 결정됨) 문자 자료형으로 n은 최대 사이즈 이다
// DROP COLUMN (DDL) ALTER TABLE과 함께 쓰이며 특정 속성을 삭제할 때 사용 ROW/ COLUMN 행/ 열 이란 말로 테이블에서 가로와 세로를 의미 ALTER TABLE ~ ADD (DDL) ALTER TABLE과 함께 쓰이며 속성을 추가할 때 사용 CREATE VIEW (DDL) 가상의 테이블과 같이 뷰 이름을 정의하는 명령 CASCADE 뷰를 참조하는 다른 뷰나 제약조건 까지 모두 삭제되는 옵션 ASC ascending order의 약자로 오름차순 정렬을 뜻함 DESC descending order의 약자로 내림차순 정렬을 뜻함 CREATE INDEX~ ON 인덱스(색인)을 생성하는 명령어 ON 뒤에 테이블의 속성을 나열하면 됨
// CLUSTER 인덱스를 생성할때 인덱스 키에 따라 데이터가 정렬되어 저장되므로 검색이 유리하게 됨(클러스터드 데이터)
// GROUP BY ~ HAVING 조건 SELECT 명령에서 데이터를 그룹화하는 명령
// ORDER BY SELECT 명령에서 데이터를 오름차순/내림차순 정렬하는 명령 DISTINCT SELECT 명령에서 중복데이터를 첫번째만 표시하는 옵션 AVG( SELECT의 GROUP에서 사용하는 평균을 구하는 함수 UNION 두개이상의 SELECT 명령의 결과를 합집합하는 연결명령 INNER JOIN 두개이상의 SELECT 명령의 결과를 교집합하는 연결명령
// LEFT JOIN ~ ON 두개이상의 SELECT 명령의 결과에서 앞선 SELECT된 테이블에 ON뒤에 있는 조건집합을 추가하는 연결명령
// `;

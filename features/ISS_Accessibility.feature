Feature: Accessabilty testing for

verifying
	
		Scenario Outline: Verify...
		Given I am testing accessibility
		When I launch the url "<url>"
		# Then I check accessibility violations with the Axe Core
		
		Examples:
		|url|
		|user1_iss|
		# |user2_iss|
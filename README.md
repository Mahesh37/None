# Traficolus
ABSTRACT: 

hello hello
PROBLEMS OF TRADITIONAL TRAFFIC LIGHTS: 
Rules for allocating traffic light colours to measures are inconsistently defined and used. Interpretation of traffic lights is rarely consistent with performance improvement. Traffic light rules are statistically invalid assessments of current performance. Traffic light does not implement emergency protocols.

APPROACH: 
Taking snaps of the real time traffic, the classifier classifies the types and number of vehicles on each lane. Based on the weightage of each lane, the classifier assigns priority to each by comparing one another. Based on this priority, the system defines which lane to be signaled green and for what duration and controls the lanes. This data is transmitted to the Traffic Light controller where the actual triggering of lights takes place. Authorized personal can also monitor the current traffic on any junction at real time. We can also have flexibility to manually operate any traffic junction from remote location. After every classification the classifier stores the weightage or traffic density of each lanes to its distributed server. Which can be used to predict future traffic based on the historic pattern’s.

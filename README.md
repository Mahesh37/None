# Traficolus
ABSTRACT: 
 computer vision technology we can classify and count the vehicles on a particular road and based on the count we can compare with other roads on the same junction using the cc cameras mounted at traffic signals. With this system we can dynamically control the priority and time duration of signals at real time automatically. Authorized personal can also monitor the current traffic on any junction at real time we can also have flexibility to manually operate any traffic junction from remote location. Best thing about this system is we can not only control the traffic but also record the traffic patterns on every junction and take necessary measures or actions to eliminate the causes for the traffic. The number of accidents which happen during rights can be greatly reduced ensuring better road safety and we can have the flexibility of diverting the incoming traffic of a junction through any media or updates in any abnormal conditions like sewage problems, road accidents, road repairs etc.

hello hello
PROBLEMS OF TRADITIONAL TRAFFIC LIGHTS: 
Rules for allocating traffic light colours to measures are inconsistently defined and used. Interpretation of traffic lights is rarely consistent with performance improvement. Traffic light rules are statistically invalid assessments of current performance. Traffic light does not implement emergency protocols.

APPROACH: 
Taking snaps of the real time traffic, the classifier classifies the types and number of vehicles on each lane. Based on the weightage of each lane, the classifier assigns priority to each by comparing one another. Based on this priority, the system defines which lane to be signaled green and for what duration and controls the lanes. This data is transmitted to the Traffic Light controller where the actual triggering of lights takes place. Authorized personal can also monitor the current traffic on any junction at real time. We can also have flexibility to manually operate any traffic junction from remote location. After every classification the classifier stores the weightage or traffic density of each lanes to its distributed server. Which can be used to predict future traffic based on the historic pattern’s.
